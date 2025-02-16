/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  MarketERC20,
  MarketERC20Interface,
} from "../../markets/MarketERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "ApprovalBorrow",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowanceBorrow",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approveBorrow",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permitBorrow",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6101406040908082523461019857610e24803803809161001f828561019d565b83398101602080838303126101985782516001600160401b0393848211610198570182601f820112156101985780519084821161016e5785519361006c601f8401601f191685018661019d565b82855283838301011161019857829060005b8381106101845750506000918401015283518481018181108582111761016e57600191839187528281520192603160f81b84528281519101209220908260e052610100948286524660a0528051918201927f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f948585528284015260608301524660808301523060a083015260a0825260c08201948286109086111761016e578490525190206080523060c052610120908152610c6392836101c18439608051836107cf015260a051836108af015260c05183610799015260e0518361081e01525182610844015251816107fb0152f35b634e487b7160e01b600052604160045260246000fd5b81810183015186820184015284920161007e565b600080fd5b601f909101601f19168101906001600160401b0382119082101761016e5760405256fe608060408181526004918236101561001657600080fd5b600092833560e01c918262a02a20146106d057508163095ea7b3146106a657816318160ddd1461068b5781631da8bf10146105cf57816323b872dd1461042f5781633644e5151461040b57816370a08231146103d35781637ecebe00146103995781637fa0b84e14610368578163a9059cbb1461028d578163d505accf146100f3575063dd62ed3e146100a857600080fd5b346100ef57806003193601126100ef57806020926100c4610716565b6100cc610731565b6001600160a01b0391821683526002865283832091168252845220549051908152f35b5080fd5b839150346100ef5761010436610747565b9083979497969596421161024a5760018060a01b039283871694858b52866020528b8b20805490600019821461023757878b8f9294848f6101d7999760016101df9c9a980190558b86519460208601967f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9885288870152166060850152608084015260a083015260c082015260c0815261019d816108d5565b5190206101a8610796565b915190602082019261190160f01b845260228301526042820152604281526101cf816108f0565b519020610ada565b9190916109c5565b16036101f457506101f1939450610bb6565b80f35b606490602087519162461bcd60e51b8352820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e617475726500006044820152fd5b634e487b7160e01b8d526011895260248dfd5b895162461bcd60e51b8152602081870152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e650000006044820152606490fd5b5050346100ef57806003193601126100ef576020916102aa610716565b82602435928315801590610356575b6102e9575b50519182526001600160a01b0316903390600080516020610c0e833981519152908590a35160018152f35b33815260018652818120546103008582101561090b565b6001600160a01b03841690853383900361031d575b5050506102be565b6103319161032c841515610950565b610995565b338352600188528383205581522061034a8382546109b8565b90558238808085610315565b50336001600160a01b038416146102b9565b5050346100ef57806003193601126100ef57602090610392610388610716565b6024359033610b5f565b5160018152f35b9050346103cf5760203660031901126103cf5760209282916001600160a01b036103c1610716565b168252845220549051908152f35b8280fd5b5050346100ef5760203660031901126100ef5760209181906001600160a01b036103fb610716565b1681526001845220549051908152f35b5050346100ef57816003193601126100ef57602090610428610796565b9051908152f35b8284346105cc5760603660031901126105cc5761044a610716565b90610453610731565b604435918261048f575b508351918252602094506001600160a01b03908116921690600080516020610c0e833981519152908590a35160018152f35b6001600160a01b0384811680835260016020908152878420549198929091906104ba8783101561090b565b851692838a036104ce575b5050505061045d565b898552600283528885203386528352888520549060018201610538575b5050928260209960018a946105178a8e9961032c600080516020610c0e8339815191529c9a1515610950565b928552528383205581522061052d8582546109b8565b9055918780806104c5565b87821061058e57509260209960018a946105178a8e999661056982600080516020610c0e8339815191529d9b610995565b86895260028552898920338a52855289892055969950505094505099819496506104eb565b895162461bcd60e51b8152908101849052601860248201527745524332303a20616c6c6f77616e636520746f6f206c6f7760401b6044820152606490fd5b80fd5b839150346100ef576105e036610747565b9083979497969596421161024a5760018060a01b039283871694858b52866020528b8b20805490600019821461023757878b8f9294848f6101d7999760016106799c9a980190558b86519460208601967fe9685ff6d48c617fe4f692c50e602cce27cbad0290beb93cfa77eac43968d58c885288870152166060850152608084015260a083015260c082015260c0815261019d816108d5565b16036101f457506101f1939450610b5f565b5050346100ef57816003193601126100ef5751908152602090f35b5050346100ef57806003193601126100ef576020906103926106c6610716565b6024359033610bb6565b849084346103cf57806003193601126103cf576020926106ee610716565b6106f6610731565b6001600160a01b0391821683526003865283832091168252845220548152f35b600435906001600160a01b038216820361072c57565b600080fd5b602435906001600160a01b038216820361072c57565b60e090600319011261072c576001600160a01b0390600435828116810361072c5791602435908116810361072c5790604435906064359060843560ff8116810361072c579060a4359060c43590565b307f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031614806108ac575b156107f1577f000000000000000000000000000000000000000000000000000000000000000090565b60405160208101907f000000000000000000000000000000000000000000000000000000000000000082527f000000000000000000000000000000000000000000000000000000000000000060408201527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260a0815260c0810181811060018060401b038211176108965760405251902090565b634e487b7160e01b600052604160045260246000fd5b507f000000000000000000000000000000000000000000000000000000000000000046146107c8565b60e081019081106001600160401b0382111761089657604052565b608081019081106001600160401b0382111761089657604052565b1561091257565b60405162461bcd60e51b815260206004820152601660248201527545524332303a2062616c616e636520746f6f206c6f7760501b6044820152606490fd5b1561095757565b60405162461bcd60e51b815260206004820152601660248201527545524332303a206e6f207a65726f206164647265737360501b6044820152606490fd5b919082039182116109a257565b634e487b7160e01b600052601160045260246000fd5b919082018092116109a257565b6005811015610ac457806109d65750565b60018103610a1e5760405162461bcd60e51b815260206004820152601860248201527745434453413a20696e76616c6964207369676e617475726560401b6044820152606490fd5b60028103610a6b5760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606490fd5b600314610a7457565b60405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608490fd5b634e487b7160e01b600052602160045260246000fd5b9291906fa2a8918ca85bafe22016d0b997e4df60600160ff1b038311610b535791608094939160ff602094604051948552168484015260408301526060820152600093849182805260015afa15610b465781516001600160a01b03811615610b40579190565b50600190565b50604051903d90823e3d90fd5b50505050600090600390565b909160207fe50de2333c10a9502fcb1d8ae13a51bbf423153dfc63c2b8997665b32154afc39160018060a01b03809416938460005260038352604060002095169485600052825280604060002055604051908152a3565b909160207f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259160018060a01b03809416938460005260028352604060002095169485600052825280604060002055604051908152a356feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220adf856df5bed79c3f75f9d08f81fa6624cf007d1a5be90685726595e6d35a3c164736f6c63430008120033";

type MarketERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MarketERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MarketERC20__factory extends ContractFactory {
  constructor(...args: MarketERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "MarketERC20";
  }

  override deploy(
    name: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MarketERC20> {
    return super.deploy(name, overrides || {}) as Promise<MarketERC20>;
  }
  override getDeployTransaction(
    name: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, overrides || {});
  }
  override attach(address: string): MarketERC20 {
    return super.attach(address) as MarketERC20;
  }
  override connect(signer: Signer): MarketERC20__factory {
    return super.connect(signer) as MarketERC20__factory;
  }
  static readonly contractName: "MarketERC20";

  public readonly contractName: "MarketERC20";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MarketERC20Interface {
    return new utils.Interface(_abi) as MarketERC20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MarketERC20 {
    return new Contract(address, _abi, signerOrProvider) as MarketERC20;
  }
}
