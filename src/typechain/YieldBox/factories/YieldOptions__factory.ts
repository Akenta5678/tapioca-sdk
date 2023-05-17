/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { YieldOptions, YieldOptionsInterface } from "../YieldOptions";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract YieldBox",
        name: "_yieldBox",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "optionId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "by",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Exercise",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "optionId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "by",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Mint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "optionId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "by",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "assetAmount",
        type: "uint256",
      },
    ],
    name: "Swap",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "optionId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "by",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "asset",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "currency",
        type: "uint32",
      },
      {
        internalType: "uint128",
        name: "price",
        type: "uint128",
      },
      {
        internalType: "uint32",
        name: "expiry",
        type: "uint32",
      },
    ],
    name: "create",
    outputs: [
      {
        internalType: "uint256",
        name: "optionId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "optionId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "exercise",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "optionId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "optionTo",
        type: "address",
      },
      {
        internalType: "address",
        name: "minterTo",
        type: "address",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "options",
    outputs: [
      {
        internalType: "uint32",
        name: "asset",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "currency",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "expiry",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "optionAssetId",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "minterAssetId",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "optionId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "assetAmount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "swap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "optionId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "optionId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "withdrawEarly",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "yieldBox",
    outputs: [
      {
        internalType: "contract YieldBox",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161209238038061209283398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b611fff806100936000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80636d9a640a1161005b5780636d9a640a14610120578063a86265bb14610133578063de40657714610146578063f1502cca1461017157600080fd5b80630ad58d2f1461008d5780633381b76c146100a2578063409e2205146100b55780635734b9681461010d575b600080fd5b6100a061009b3660046119a7565b610192565b005b6100a06100b03660046119a7565b6105dc565b6100c86100c33660046119dc565b61096a565b6040805163ffffffff97881681529587166020870152938616938501939093529084166060840152909216608082015260a081019190915260c0015b60405180910390f35b6100a061011b3660046119f5565b6109c9565b6100a061012e3660046119a7565b610cae565b6100a0610141366004611a3b565b610e90565b600054610159906001600160a01b031681565b6040516001600160a01b039091168152602001610104565b61018461017f366004611a72565b6110ca565b604051908152602001610104565b6000600184815481106101a7576101a7611ada565b600091825260209091206002909102018054909150600160401b900463ffffffff164210156102165760405162461bcd60e51b815260206004820152601660248201527513dc1d1a5bdb881b9bdd081e595d08195e1c1a5c995960521b60448201526064015b60405180910390fd5b600054815460405163bd85b03960e01b815263ffffffff600160801b8304811660048301526001600160a01b0390931692630411b252923092879290911690859063bd85b0399060240160206040518083038186803b15801561027857600080fd5b505afa15801561028c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102b09190611af0565b600054875460405163bd85b03960e01b8152600160201b90910463ffffffff1660048201528a916001600160a01b03169063bd85b0399060240160206040518083038186803b15801561030257600080fd5b505afa158015610316573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061033a9190611af0565b6103449190611b1f565b61034e9190611b54565b6040518563ffffffff1660e01b815260040161036d9493929190611b68565b600060405180830381600087803b15801561038757600080fd5b505af115801561039b573d6000803e3d6000fd5b5050600054835460405163bd85b03960e01b815263ffffffff600160801b8304811660048301526001600160a01b039093169450630411b2529350309287921690859063bd85b0399060240160206040518083038186803b1580156103ff57600080fd5b505afa158015610413573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104379190611af0565b600054875460405163bd85b03960e01b8152600160201b90910463ffffffff1660048201528a916001600160a01b03169063bd85b0399060240160206040518083038186803b15801561048957600080fd5b505afa15801561049d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104c19190611af0565b6104cb9190611b1f565b6104d59190611b54565b6040518563ffffffff1660e01b81526004016104f49493929190611b68565b600060405180830381600087803b15801561050e57600080fd5b505af1158015610522573d6000803e3d6000fd5b50506000548354604051634f752fb360e11b81526001600160a01b039092169350639eea5f66925061056991600160801b90910463ffffffff169033908890600401611b97565b600060405180830381600087803b15801561058357600080fd5b505af1158015610597573d6000803e3d6000fd5b505060408051878152602081018790523393507f9da6493a92039daf47d1f2d7a782299c5994c6323eb1e972f69c432089ec52bf92500160405180910390a250505050565b6000600184815481106105f1576105f1611ada565b600091825260209091206002909102018054909150600160401b900463ffffffff16421061065a5760405162461bcd60e51b815260206004820152601660248201527513dc1d1a5bdb881b9bdd081e595d08195e1c1a5c995960521b604482015260640161020d565b6000548154604051634f752fb360e11b81526001600160a01b0390921691639eea5f669161069d91600160601b90910463ffffffff169033908890600401611b97565b600060405180830381600087803b1580156106b757600080fd5b505af11580156106cb573d6000803e3d6000fd5b50506000548354604051634f752fb360e11b81526001600160a01b039092169350639eea5f66925061071291600160801b90910463ffffffff169033908890600401611b97565b600060405180830381600087803b15801561072c57600080fd5b505af1158015610740573d6000803e3d6000fd5b505060008054845460405163bd85b03960e01b815263ffffffff909116600482015291935083925082916001600160a01b039091169063bd85b0399060240160206040518083038186803b15801561079757600080fd5b505afa1580156107ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107cf9190611af0565b9050801561083a5760018401546107ee87670de0b6b3a7640000611b1f565b6107f89190611b54565b925080831115610835576001840154670de0b6b3a76400009061081b8386611bbe565b6108259190611b1f565b61082f9190611b54565b91508092505b61083e565b8591505b6000548454604051630208d92960e11b81526001600160a01b0390921691630411b252916108839130918a91600160201b90910463ffffffff16908890600401611b68565b600060405180830381600087803b15801561089d57600080fd5b505af11580156108b1573d6000803e3d6000fd5b50506000548654604051630208d92960e11b81526001600160a01b039092169350630411b25292506108f49130918a9163ffffffff909116908990600401611b68565b600060405180830381600087803b15801561090e57600080fd5b505af1158015610922573d6000803e3d6000fd5b5050604080518a8152602081018a90523393507f9da6493a92039daf47d1f2d7a782299c5994c6323eb1e972f69c432089ec52bf92500160405180910390a250505050505050565b6001818154811061097a57600080fd5b60009182526020909120600290910201805460019091015463ffffffff8083169350600160201b8304811692600160401b8104821692600160601b8204831692600160801b9092049091169086565b6000600185815481106109de576109de611ada565b600091825260209091206002909102018054909150600160401b900463ffffffff164210610a3f5760405162461bcd60e51b815260206004820152600e60248201526d13dc1d1a5bdb88195e1c1a5c995960921b604482015260640161020d565b600054815460405163bd85b03960e01b815263ffffffff90911660048201526001600160a01b039091169063bd85b0399060240160206040518083038186803b158015610a8b57600080fd5b505afa158015610a9f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ac39190611af0565b15610b105760405162461bcd60e51b815260206004820152601d60248201527f4f7074696f6e73206578657263697365642c206e6f206d696e74696e67000000604482015260640161020d565b6000548154604051630208d92960e11b81526001600160a01b0390921691630411b25291610b4f913391309163ffffffff909116908a90600401611b68565b600060405180830381600087803b158015610b6957600080fd5b505af1158015610b7d573d6000803e3d6000fd5b5050600054835460405163020da84160e61b81526001600160a01b03909216935063836a10409250610bc491600160601b90910463ffffffff169087908990600401611b97565b600060405180830381600087803b158015610bde57600080fd5b505af1158015610bf2573d6000803e3d6000fd5b5050600054835460405163020da84160e61b81526001600160a01b03909216935063836a10409250610c3991600160801b90910463ffffffff169086908990600401611b97565b600060405180830381600087803b158015610c5357600080fd5b505af1158015610c67573d6000803e3d6000fd5b505060408051888152602081018890523393507f4e3883c75cc9c752bb1db2e406a822e4a75067ae77ad9a0a4d179f2709b9e1f69250015b60405180910390a25050505050565b600060018481548110610cc357610cc3611ada565b906000526020600020906002020190506000670de0b6b3a7640000826001015485610cee9190611b1f565b610cf89190611b54565b6000548354604051630208d92960e11b81529293506001600160a01b0390911691630411b25291610d409133913091600160201b90910463ffffffff16908790600401611b68565b600060405180830381600087803b158015610d5a57600080fd5b505af1158015610d6e573d6000803e3d6000fd5b50506000548454604051630208d92960e11b81526001600160a01b039092169350630411b2529250610db1913091339163ffffffff909116908a90600401611b68565b600060405180830381600087803b158015610dcb57600080fd5b505af1158015610ddf573d6000803e3d6000fd5b5050600054845460405163020da84160e61b81526001600160a01b03909216935063836a10409250610e2691600160601b90910463ffffffff169087908690600401611b97565b600060405180830381600087803b158015610e4057600080fd5b505af1158015610e54573d6000803e3d6000fd5b505060408051888152602081018590523393507f48b43f133ac721cb5f6e2a3d8ab7caee987bccfb4197537cf43c9f907f057f3a925001610c9f565b600060018381548110610ea557610ea5611ada565b600091825260209091206002909102018054909150600160401b900463ffffffff164210610f0a5760405162461bcd60e51b815260206004820152601260248201527113dc1d1a5bdb881a185cc8195e1c1a5c995960721b604482015260640161020d565b6000548154604051634f752fb360e11b81526001600160a01b0390921691639eea5f6691610f4d91600160601b90910463ffffffff169033908790600401611b97565b600060405180830381600087803b158015610f6757600080fd5b505af1158015610f7b573d6000803e3d6000fd5b5050600054835460018501546001600160a01b039092169350630411b25292503391309163ffffffff1690610fb888670de0b6b3a7640000611b1f565b610fc29190611b54565b6040518563ffffffff1660e01b8152600401610fe19493929190611b68565b600060405180830381600087803b158015610ffb57600080fd5b505af115801561100f573d6000803e3d6000fd5b50506000548354604051630208d92960e11b81526001600160a01b039092169350630411b25292506110589130913391600160201b90910463ffffffff16908890600401611b68565b600060405180830381600087803b15801561107257600080fd5b505af1158015611086573d6000803e3d6000fd5b505060408051868152602081018690523393507f0f0ef06b2bde74cd9e83806f30944029385e83657a76b7f8994a28119b460d8592500160405180910390a2505050565b6040805160c0810182526000606082018190526080820181905263ffffffff87811680845287821660208501526001600160801b03871660a08501529085168385015281549351634e41a1fb60e01b8152600481019190915290926001600160a01b031690632482ee27908290634e41a1fb9060240160006040518083038186803b15801561115857600080fd5b505afa15801561116c573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526111949190810190611c1b565b6000546020850151604051634e41a1fb60e01b815263ffffffff90911660048201526001600160a01b0390911690634e41a1fb9060240160006040518083038186803b1580156111e357600080fd5b505afa1580156111f7573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261121f9190810190611c1b565b60a08501516000546020870151604051631fa3f33160e11b815263ffffffff90911660048201526112b492916001600160a01b031690633f47e662906024015b60206040518083038186803b15801561127757600080fd5b505afa15801561128b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112af9190611cc8565b611642565b6040516020016112c693929190611cf2565b60405160208183030381529060405260126040518363ffffffff1660e01b81526004016112f4929190611d8b565b602060405180830381600087803b15801561130e57600080fd5b505af1158015611322573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113469190611de1565b63ffffffff90811660608301526000548251604051634e41a1fb60e01b8152921660048301526001600160a01b031690632482ee27908290634e41a1fb9060240160006040518083038186803b15801561139f57600080fd5b505afa1580156113b3573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526113db9190810190611c1b565b6000546020850151604051634e41a1fb60e01b815263ffffffff90911660048201526001600160a01b0390911690634e41a1fb9060240160006040518083038186803b15801561142a57600080fd5b505afa15801561143e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526114669190810190611c1b565b60a08501516000546020870151604051631fa3f33160e11b815263ffffffff90911660048201526114aa92916001600160a01b031690633f47e6629060240161125f565b6040516020016114bc93929190611dfe565b60405160208183030381529060405260126040518363ffffffff1660e01b81526004016114ea929190611e1b565b602060405180830381600087803b15801561150457600080fd5b505af1158015611518573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061153c9190611de1565b63ffffffff908116608083019081526001805480820182556000919091528351600282027fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6810180546020880151604089015160608a015197518916600160801b0263ffffffff60801b19988a16600160601b0263ffffffff60601b19928b16600160401b02929092166fffffffffffffffff000000000000000019938b16600160201b0267ffffffffffffffff1990951697909a169690961792909217169690961795909517939093161790925560a0909201517fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf79092019190915595945050505050565b6040805160288082526060828101909352600091829182918291602082018180368337019050509050866116ae57600360fc1b818461168081611e56565b95508151811061169257611692611ada565b60200101906001600160f81b031916908160001a9053506118d2565b6116b9866012611e71565b60ff1693505b60006116cc85600a611f7a565b6116d69089611b54565b90506116e3600a82611f86565b6116ee84600a611b1f565b6116f89190611f9a565b9250821561179057603061170d600a83611f86565b6117179190611f9a565b60f81b828561172581611e56565b96508151811061173757611737611ada565b60200101906001600160f81b031916908160001a905350600184118015611771575061176485600a611f7a565b61176e9082611b1f565b88145b801561178057508660ff168511155b1561178b57506118d2565b611853565b8660ff1685141561180e57600360fc1b82856117ab81611e56565b9650815181106117bd576117bd611ada565b60200101906001600160f81b031916908160001a905350601760f91b82856117e481611e56565b9650815181106117f6576117f6611ada565b60200101906001600160f81b031916908160001a9053505b8660ff1685101561185357600360fc1b828561182981611e56565b96508151811061183b5761183b611ada565b60200101906001600160f81b031916908160001a9053505b60ff8716158015906118675750848760ff16145b80156118735750600083115b801561187f5750600085115b156118be57601760f91b828561189481611e56565b9650815181106118a6576118a6611ada565b60200101906001600160f81b031916908160001a9053505b846118c881611fb2565b95506116bf915050565b60008367ffffffffffffffff8111156118ed576118ed611bd5565b6040519080825280601f01601f191660200182016040528015611917576020820181803683370190505b50905060005b8481101561197d5782818151811061193757611937611ada565b602001015160f81c60f81b82828151811061195457611954611ada565b60200101906001600160f81b031916908160001a9053508061197581611e56565b91505061191d565b509450505050505b92915050565b80356001600160a01b03811681146119a257600080fd5b919050565b6000806000606084860312156119bc57600080fd5b83359250602084013591506119d36040850161198b565b90509250925092565b6000602082840312156119ee57600080fd5b5035919050565b60008060008060808587031215611a0b57600080fd5b8435935060208501359250611a226040860161198b565b9150611a306060860161198b565b905092959194509250565b60008060408385031215611a4e57600080fd5b50508035926020909101359150565b63ffffffff81168114611a6f57600080fd5b50565b60008060008060808587031215611a8857600080fd5b8435611a9381611a5d565b93506020850135611aa381611a5d565b925060408501356001600160801b0381168114611abf57600080fd5b91506060850135611acf81611a5d565b939692955090935050565b634e487b7160e01b600052603260045260246000fd5b600060208284031215611b0257600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615611b3957611b39611b09565b500290565b634e487b7160e01b600052601260045260246000fd5b600082611b6357611b63611b3e565b500490565b6001600160a01b03948516815292909316602083015263ffffffff166040820152606081019190915260800190565b63ffffffff9390931683526001600160a01b03919091166020830152604082015260600190565b600082821015611bd057611bd0611b09565b500390565b634e487b7160e01b600052604160045260246000fd5b60005b83811015611c06578181015183820152602001611bee565b83811115611c15576000848401525b50505050565b600060208284031215611c2d57600080fd5b815167ffffffffffffffff80821115611c4557600080fd5b818401915084601f830112611c5957600080fd5b815181811115611c6b57611c6b611bd5565b604051601f8201601f19908116603f01168101908382118183101715611c9357611c93611bd5565b81604052828152876020848701011115611cac57600080fd5b611cbd836020830160208801611beb565b979650505050505050565b600060208284031215611cda57600080fd5b815160ff81168114611ceb57600080fd5b9392505050565b61796f60f01b815260008451611d0f816002850160208901611beb565b601d60f91b6002918401918201528451611d30816003840160208901611beb565b600160fd1b600392909101918201528351611d52816004840160208801611beb565b0160040195945050505050565b60008151808452611d77816020860160208601611beb565b601f01601f19169290920160200192915050565b60808152600b60808201526a2cb4b2b63227b83a34b7b760a91b60a082015260c060208201526000611dc060c0830185611d5f565b60ff9390931660408301525080820360609091015260008152602001919050565b600060208284031215611df357600080fd5b8151611ceb81611a5d565b61796d60f01b815260008451611d0f816002850160208901611beb565b6080815260116080820152702cb4b2b63227b83a34b7b726b4b73a32b960791b60a082015260c060208201526000611dc060c0830185611d5f565b6000600019821415611e6a57611e6a611b09565b5060010190565b600060ff821660ff84168060ff03821115611e8e57611e8e611b09565b019392505050565b600181815b80851115611ed1578160001904821115611eb757611eb7611b09565b80851615611ec457918102915b93841c9390800290611e9b565b509250929050565b600082611ee857506001611985565b81611ef557506000611985565b8160018114611f0b5760028114611f1557611f31565b6001915050611985565b60ff841115611f2657611f26611b09565b50506001821b611985565b5060208310610133831016604e8410600b8410161715611f54575081810a611985565b611f5e8383611e96565b8060001904821115611f7257611f72611b09565b029392505050565b6000611ceb8383611ed9565b600082611f9557611f95611b3e565b500690565b60008219821115611fad57611fad611b09565b500190565b600081611fc157611fc1611b09565b50600019019056fea264697066735822122098e634aae4156e9c7d5ea14c6e36a1b11fe801eaa3dba21051e2661f46d4b98a64736f6c63430008090033";

type YieldOptionsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: YieldOptionsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class YieldOptions__factory extends ContractFactory {
  constructor(...args: YieldOptionsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "YieldOptions";
  }

  deploy(
    _yieldBox: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<YieldOptions> {
    return super.deploy(_yieldBox, overrides || {}) as Promise<YieldOptions>;
  }
  getDeployTransaction(
    _yieldBox: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_yieldBox, overrides || {});
  }
  attach(address: string): YieldOptions {
    return super.attach(address) as YieldOptions;
  }
  connect(signer: Signer): YieldOptions__factory {
    return super.connect(signer) as YieldOptions__factory;
  }
  static readonly contractName: "YieldOptions";
  public readonly contractName: "YieldOptions";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): YieldOptionsInterface {
    return new utils.Interface(_abi) as YieldOptionsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): YieldOptions {
    return new Contract(address, _abi, signerOrProvider) as YieldOptions;
  }
}