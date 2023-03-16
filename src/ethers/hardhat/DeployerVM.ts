import { ContractFactory } from 'ethers';
import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { v4 as uuidv4 } from 'uuid';
import { TContract } from '../../shared';
import {
    TapiocaDeployer,
    TapiocaDeployer__factory,
} from '../../typechain/tap-token';
import { Multicall3 } from '../../typechain/utils/MultiCall';

interface IDependentOn {
    deploymentName: string;
    argPosition: number;
}

interface IDeploymentQueue {
    deploymentName: string;
    contract: ContractFactory;
    args: unknown[];
    dependsOn?: IDependentOn[];
}

export interface TDeploymentVMContract extends TContract {
    meta: { args: unknown[]; salt: string; create2: true };
}

interface IConstructorOptions {
    bytecodeSizeLimit: number; // Limit of bytecode size for a single transaction, error happened on Arb Goerli with Alchemy RPC
    multicall: Multicall3;
    tag?: string;
}

export interface IDeployerVMAdd<T extends ContractFactory>
    extends IDeploymentQueue {
    contract: T;
    args: Parameters<T['deploy']>;
}

// TODO - Ability to load already deployed contract (To verify?)
// TODO - Ability to add arbitrary calls in between deployments?
/**
 * Class to deploy contracts using the TapiocaDeployer & Multicall3 to aggregate deployments in a single transaction.
 * @param hre HardhatRuntimeEnvironment instance of Hardhat.
 * @param options Options to use.
 * @param options.bytecodeSizeLimit Limit of bytecode size for a single transaction, if RPC provider is not able to handle it, error will be thrown.
 * @param options.tag Tag to use for the deployment. If not provided, 'default' will be used (Per SDK).
 * @param options.multicall Multicall3 instance to use for the deployment.
 *
 */
export class DeployerVM {
    private tapiocaDeployer?: TapiocaDeployer;

    hre: HardhatRuntimeEnvironment;
    options: IConstructorOptions;

    /**
     * Queue of contracts to deploy
     * Runtime bound, equal to [] when creating a new instance of this class or after flushing the runtime.
     */
    private deploymentQueue: IDeploymentQueue[] = [];

    /**
     * Queue of contract to build. Used to build the bytecode for the TapiocaDeployer.
     * Runtime bound, equal to [] when creating a new instance of this class or after flushing the runtime.
     * This is a private queue used to build the calls to the multicall contract
     */
    private buildQueue: (IDeploymentQueue & {
        deterministicAddress: string;
        creationCode: string;
        salt: string;
    })[] = [];

    /**
     * List of deployed contracts
     */
    private depList: TContract[] = [];

    /**
     * Flag to check if the deployment queue has been executed
     */
    private executed = false;

    constructor(hre: HardhatRuntimeEnvironment, options: IConstructorOptions) {
        this.hre = hre;
        this.options = options;
    }

    // ***********
    // Getter
    // ***********

    /**
     * Returns the current state of deployment queue
     */
    getQueue() {
        return this.deploymentQueue;
    }

    /**
     * Returns the current state of the build queue
     */
    getBuildQueue() {
        return this.buildQueue;
    }

    /**
     * Return a list of deployed contracts
     */
    list(): TDeploymentVMContract[] {
        if (!this.executed) {
            throw new Error('[-] Deployment queue has not been executed yet');
        }
        if (this.depList.length === 0) {
            this.depList = this.buildQueue.map((contract) => ({
                name: contract.deploymentName,
                address: contract.deterministicAddress,
                meta: {
                    args: contract.args,
                    salt: contract.salt,
                    create2: true,
                },
            }));
        }

        return this.depList;
    }

    // ***********
    // Exec
    // ***********

    /**
     * Add a contract to the deployment queue
     */
    add<T extends ContractFactory>(contract: IDeployerVMAdd<T>) {
        // Validate contract dependencies
        contract.dependsOn?.forEach((dependency) => {
            if (dependency.argPosition >= contract.args.length) {
                throw new Error(
                    `[-] Dependency for ${contract.deploymentName} argPosition is out of bounds`,
                );
            }
        });

        console.log(
            '[+] Adding contract to deployment queue: ',
            contract.deploymentName,
        );
        this.deploymentQueue.push(contract);
        return this;
    }

    /**
     * Execute the current build queue and deploy the contracts, using Multicall3 to aggregate the calls.
     * @param wait Number of blocks to wait for the transaction to be mined. Default: 0
     */
    async execute(wait = 0) {
        if (this.executed) {
            throw new Error('[-] Deployment queue has already been executed');
        }
        const calls = await this.getBuildCalls();

        console.log('[+] Executing deployment queue');
        if (calls.length > 1) {
            console.log(
                '[+] Call data size exceeded, batching calls into ',
                calls.length,
                ' transactions',
            );
        }
        // Execute the calls
        for (const call of calls) {
            const tx = await this.options.multicall.aggregate3(call);
            console.log(`[+] Execution batch hash: ${tx.hash}`);
            await tx.wait(wait);
        }

        this.executed = true;
        console.log('[+] Deployment queue executed');

        return this;
    }

    /**
     * Save the deployments to the local database.
     */
    save() {
        if (!this.executed) {
            throw new Error(
                '[-] Deployment queue has not been executed. Please call execute() before writing the deployment file',
            );
        }

        const dep = this.hre.SDK.db.buildLocalDeployment({
            chainId: String(this.hre.network.config.chainId),
            contracts: this.list(),
        });
        this.hre.SDK.db.saveLocally(dep, this.options.tag);
        console.log(
            '[+] Deployment saved for chainId: ',
            String(this.hre.network.config.chainId),
        );

        return this;
    }

    /**
     *
     * Verify the deployed contracts on Etherscan.
     */
    async verify() {
        console.log('[+] Verifying deployed contracts');
        type TVerificationObject = {
            contract?: string;
            address: string;
            constructorArguments: unknown[];
        };

        // We will batch the verification calls to avoid hitting the etherscan API rate limit, max 5 calls per second
        const verifyList: TVerificationObject[][] = [[]];

        let counter = 1;
        for (const contract of this.list()) {
            if (counter % 5 === 0) {
                verifyList.push([]);
            }

            verifyList[verifyList.length - 1].push({
                //TODO for testing purpose, remove later
                ...(contract.name === 'YieldBoxMock'
                    ? {
                          contract:
                              'contracts/options/mocks/YieldBoxMock.sol:YieldBoxMock',
                      }
                    : {}),
                address: contract.address,
                constructorArguments: contract.meta.args,
            });
            counter++;
        }

        // Verify the contracts
        for (const batch of verifyList) {
            await Promise.all(
                batch.map((contract) =>
                    this.hre.run('verify:verify', {
                        ...contract,
                        noCompile: true,
                    }),
                ),
            );
            await new Promise((resolve) => setTimeout(resolve, 2000));
        }

        return this;
    }

    /**
     * Load already deployed contracts.
     * @param deps List of deployed contracts
     */
    load(deps: TContract[]) {
        this.executed = true;
        this.depList = deps;
        return this;
    }

    /**
     * Reset the deployment queue
     */
    flush() {
        this.deploymentQueue = [];
        this.buildQueue = [];
        this.executed = false;
        this.depList = [];
        return this;
    }

    // ***********
    // Utils
    // ***********
    private async getBuildCalls(): Promise<Multicall3.Call3Struct[][]> {
        console.log('[+] Populating build queue');
        await this.populateBuildQueue();
        console.log('[+] Building call queue');
        const tapiocaDeployer = await this.getTapiocaDeployer();

        // Build the calls
        let currentByteCodeSize = 0;
        let currentBatch = 0;
        const calls: Multicall3.Call3Struct[][] = [[]];
        for (const build of this.buildQueue) {
            // We'll batch the calls to avoid hitting the gas limit
            const callData = this.buildDeployerCode(
                tapiocaDeployer,
                0,
                build.salt,
                build.creationCode,
            );
            // Check if we need to create a new batch
            if (
                currentByteCodeSize + callData.length >
                this.options.bytecodeSizeLimit
            ) {
                currentByteCodeSize = 0;
                currentBatch++;
                calls[currentBatch] = [];
            }

            currentByteCodeSize += callData.length;
            // Add creation code to the calls
            calls[currentBatch].push({
                target: tapiocaDeployer.address,
                allowFailure: false,
                callData,
            });
        }

        return calls;
    }

    /**
     * Build the bytecode for the TapiocaDeployer 'deploy' function
     */
    private buildDeployerCode(
        tapiocaDeployer: TapiocaDeployer,
        amount: number,
        salt: string,
        creationCode: string,
    ) {
        return tapiocaDeployer.interface.encodeFunctionData('deploy', [
            amount,
            salt,
            creationCode,
        ]);
    }

    /**
     * Build the creation code for each contract in the queue. For each contract, we check if it has dependencies, and build them deterministically.
     */
    private async populateBuildQueue() {
        const tapiocaDeployer = await this.getTapiocaDeployer();

        for (const contract of this.deploymentQueue) {
            {
                // Build dependencies if any
                contract.dependsOn?.forEach((dependency) => {
                    // Find the dependency
                    const deps = this.buildQueue.find(
                        (e) => e.deploymentName === dependency.deploymentName,
                    );
                    // Throw if not found
                    if (!deps) {
                        throw new Error(
                            `[-] Dependency ${dependency.deploymentName} not found for ${contract.deploymentName}}`,
                        );
                    }
                    // Set the dependency address in the contract args
                    contract.args[dependency.argPosition] =
                        deps.deterministicAddress;
                });

                // Build the creation code
                const creationCode =
                    contract.contract.bytecode +
                    contract.contract.interface
                        .encodeDeploy(contract.args)
                        .split('x')[1];

                const salt = this.genSalt();

                this.buildQueue.push({
                    ...contract,
                    deterministicAddress:
                        await this.computeDeterministicAddress(
                            tapiocaDeployer,
                            salt,
                            creationCode,
                        ),
                    creationCode,
                    salt,
                });
            }
        }
    }

    private computeDeterministicAddress(
        deployer: TapiocaDeployer,
        salt: string,
        bytecode: string,
    ) {
        return deployer.callStatic['computeAddress(bytes32,bytes32)'](
            salt,
            this.hre.ethers.utils.keccak256(bytecode),
        );
    }
    private async getTapiocaDeployer(): Promise<TapiocaDeployer> {
        if (this.tapiocaDeployer) return this.tapiocaDeployer;

        // Get deployer deployment
        let deployment: TContract | undefined;
        try {
            deployment = this.hre.SDK.db.getGlobalDeployment(
                'tap-token',
                String(this.hre.network.config.chainId),
                'TapiocaDeployer',
                this.options.tag,
            );
        } catch (e) {}

        // Deploy TapiocaDeployer if not deployed
        if (!deployment) {
            // Deploy TapiocaDeployer
            const tapiocaDeployer = await new TapiocaDeployer__factory(
                this.hre.network.provider,
            ).deploy();

            await tapiocaDeployer.deployTransaction.wait(3);

            // Save deployment
            const dep = this.hre.SDK.db.buildLocalDeployment({
                chainId: String(this.hre.network.config.chainId),
                contracts: [
                    {
                        address: tapiocaDeployer.address,
                        name: 'TapiocaDeployer',
                        meta: {},
                    },
                ],
            });
            this.hre.SDK.db.saveLocally(dep, this.options.tag);

            this.tapiocaDeployer = tapiocaDeployer;
            return tapiocaDeployer;
        }

        // Return TapiocaDeployer
        return this.hre.ethers.getContractAt(
            'TapiocaDeployer',
            deployment.address,
        );
    }

    private genSalt() {
        return this.hre.ethers.utils.solidityKeccak256(['string'], [uuidv4()]);
    }
}
