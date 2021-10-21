/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { MockStableDebtToken } from "./MockStableDebtToken";

export class MockStableDebtTokenFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<MockStableDebtToken> {
    return super.deploy(overrides || {}) as Promise<MockStableDebtToken>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockStableDebtToken {
    return super.attach(address) as MockStableDebtToken;
  }
  connect(signer: Signer): MockStableDebtTokenFactory {
    return super.connect(signer) as MockStableDebtTokenFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockStableDebtToken {
    return new Contract(address, _abi, signerOrProvider) as MockStableDebtToken;
  }
}

const _abi = [
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
        name: "fromUser",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "toUser",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "BorrowAllowanceDelegated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "currentBalance",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "balanceIncrease",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "avgStableRate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newTotalSupply",
        type: "uint256",
      },
    ],
    name: "Burn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "underlyingAsset",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "incentivesController",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "debtTokenDecimals",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "string",
        name: "debtTokenName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "debtTokenSymbol",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "params",
        type: "bytes",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "onBehalfOf",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "currentBalance",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "balanceIncrease",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newRate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "avgStableRate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newTotalSupply",
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
    name: "DEBT_TOKEN_REVISION",
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
    inputs: [],
    name: "POOL",
    outputs: [
      {
        internalType: "contract ILendingPool",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "UNDERLYING_ASSET_ADDRESS",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
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
        name: "delegatee",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approveDelegation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
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
        name: "fromUser",
        type: "address",
      },
      {
        internalType: "address",
        name: "toUser",
        type: "address",
      },
    ],
    name: "borrowAllowance",
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
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
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
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
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
    inputs: [],
    name: "getAverageStableRate",
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
    inputs: [],
    name: "getIncentivesController",
    outputs: [
      {
        internalType: "contract IAaveIncentivesController",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getSupplyData",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint40",
        name: "",
        type: "uint40",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalSupplyAndAvgRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
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
    inputs: [],
    name: "getTotalSupplyLastUpdated",
    outputs: [
      {
        internalType: "uint40",
        name: "",
        type: "uint40",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getUserLastUpdated",
    outputs: [
      {
        internalType: "uint40",
        name: "",
        type: "uint40",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getUserStableRate",
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
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
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
        internalType: "contract ILendingPool",
        name: "pool",
        type: "address",
      },
      {
        internalType: "address",
        name: "underlyingAsset",
        type: "address",
      },
      {
        internalType: "contract IAaveIncentivesController",
        name: "incentivesController",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "debtTokenDecimals",
        type: "uint8",
      },
      {
        internalType: "string",
        name: "debtTokenName",
        type: "string",
      },
      {
        internalType: "string",
        name: "debtTokenSymbol",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "params",
        type: "bytes",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "address",
        name: "onBehalfOf",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rate",
        type: "uint256",
      },
    ],
    name: "mint",
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
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "principalBalanceOf",
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
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
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
        name: "recipient",
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
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
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
];

const _bytecode =
  "0x608060405260006006553480156200001657600080fd5b50604080518082018252600e8082526d111150951513d2d15397d253541360921b60208084018281528551808701909652928552840152815191929160009162000064916003919062000098565b5081516200007a90600490602085019062000098565b506005805460ff191660ff9290921691909117905550620001349050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620000db57805160ff19168380011785556200010b565b828001600101855582156200010b579182015b828111156200010b578251825591602001919060010190620000ee565b50620001199291506200011d565b5090565b5b808211156200011957600081556001016200011e565b611d2080620001446000396000f3fe608060405234801561001057600080fd5b50600436106101a95760003560e01c806395d89b41116100f9578063c04a8a1011610097578063dd62ed3e11610071578063dd62ed3e146106ab578063e7484890146106d9578063e78c9b3b146106e1578063f731e9be14610707576101a9565b8063c04a8a10146104b0578063c222ec8a146104dc578063c634dfaa14610685576101a9565b8063a9059cbb116100d3578063a9059cbb14610438578063b16a19de14610464578063b3f1c93d1461046c578063b9a7b622146104a8576101a9565b806395d89b41146104025780639dc29fac1461040a578063a457c2d7146102d9576101a9565b80636bd76d241161016657806375d264131161014057806375d264131461037d578063797743381461038557806379ce6b8c146103ba57806390f6fcf2146103fa576101a9565b80636bd76d241461030557806370a08231146103335780637535d24614610359576101a9565b806306fdde03146101ae578063095ea7b31461022b57806318160ddd1461026b57806323b872dd14610285578063313ce567146102bb57806339509351146102d9575b600080fd5b6101b6610728565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101f05781810151838201526020016101d8565b50505050905090810190601f16801561021d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102576004803603604081101561024157600080fd5b506001600160a01b0381351690602001356107be565b604080519115158252519081900360200190f35b610273610806565b60408051918252519081900360200190f35b6102576004803603606081101561029b57600080fd5b506001600160a01b03813581169160208101359091169060400135610818565b6102c3610860565b6040805160ff9092168252519081900360200190f35b610257600480360360408110156102ef57600080fd5b506001600160a01b038135169060200135610869565b6102736004803603604081101561031b57600080fd5b506001600160a01b03813581169160200135166108b8565b6102736004803603602081101561034957600080fd5b50356001600160a01b03166108e5565b61036161095f565b604080516001600160a01b039092168252519081900360200190f35b610361610977565b61038d610981565b6040805194855260208501939093528383019190915264ffffffffff166060830152519081900360800190f35b6103e0600480360360208110156103d057600080fd5b50356001600160a01b03166109b7565b6040805164ffffffffff9092168252519081900360200190f35b6102736109d9565b6101b66109df565b6104366004803603604081101561042057600080fd5b506001600160a01b038135169060200135610a40565b005b6102576004803603604081101561044e57600080fd5b506001600160a01b038135169060200135610818565b610361610da6565b6102576004803603608081101561048257600080fd5b506001600160a01b03813581169160208101359091169060408101359060600135610db5565b61027361110d565b610436600480360360408110156104c657600080fd5b506001600160a01b038135169060200135611112565b610436600480360360e08110156104f257600080fd5b6001600160a01b038235811692602081013582169260408201359092169160ff606083013516919081019060a08101608082013564010000000081111561053857600080fd5b82018360208201111561054a57600080fd5b8035906020019184600183028401116401000000008311171561056c57600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092959493602081019350359150506401000000008111156105bf57600080fd5b8201836020820111156105d157600080fd5b803590602001918460018302840111640100000000831117156105f357600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929594936020810193503591505064010000000081111561064657600080fd5b82018360208201111561065857600080fd5b8035906020019184600183028401116401000000008311171561067a57600080fd5b5090925090506111ae565b6102736004803603602081101561069b57600080fd5b50356001600160a01b0316611412565b610273600480360360408110156106c157600080fd5b506001600160a01b0381358116916020013516610869565b6103e061141d565b610273600480360360208110156106f757600080fd5b50356001600160a01b031661142a565b61070f611445565b6040805192835260208301919091528051918290030190f35b60038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156107b45780601f10610789576101008083540402835291602001916107b4565b820191906000526020600020905b81548152906001019060200180831161079757829003601f168201915b5050505050905090565b6040805162461bcd60e51b81526020600482015260166024820152751054141493d5905317d393d517d4d5541413d495115160521b6044820152905160009181900360640190fd5b6000610813603b5461145e565b905090565b6040805162461bcd60e51b81526020600482015260166024820152751514905394d1915497d393d517d4d5541413d495115160521b6044820152905160009181900360640190fd5b60055460ff1690565b6040805162461bcd60e51b815260206004820152601760248201527f414c4c4f57414e43455f4e4f545f535550504f525445440000000000000000006044820152905160009181900360640190fd5b6001600160a01b038083166000908152603a60209081526040808320938516835292905220545b92915050565b6000806108f1836114a6565b6001600160a01b0384166000908152603d60205260409020549091508161091d5760009250505061095a565b6001600160a01b0384166000908152603c602052604081205461094890839064ffffffffff166114c1565b905061095483826114d5565b93505050505b919050565b603e546501000000000090046001600160a01b031690565b6000610813611593565b6000806000806000603b5490506109966115a2565b61099f8261145e565b603e54919790965091945064ffffffffff1692509050565b6001600160a01b03166000908152603c602052604090205464ffffffffff1690565b603b5490565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156107b45780601f10610789576101008083540402835291602001916107b4565b610a4861095f565b6001600160a01b0316610a596115a8565b6001600160a01b03161460405180604001604052806002815260200161323960f01b81525090610b075760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610acc578181015183820152602001610ab4565b50505050905090810190601f168015610af95780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600080610b14846115ac565b92509250506000610b23610806565b6001600160a01b0386166000908152603d6020526040812054919250908190868411610b58576000603b819055600255610bda565b610b628488611605565b600281905591506000610b80610b7786611647565b603b54906114d5565b90506000610b97610b908a611647565b84906114d5565b9050818110610bb35760006002819055603b8190559450610bd7565b610bcf610bbf85611647565b610bc98484611605565b906116c5565b603b81905594505b50505b85871415610c18576001600160a01b0388166000908152603d60209081526040808320839055603c9091529020805464ffffffffff19169055610c46565b6001600160a01b0388166000908152603c60205260409020805464ffffffffff19164264ffffffffff161790555b603e805464ffffffffff19164264ffffffffff1617905586851115610ce6576000610c718689611605565b9050610c7e8982876117cc565b6040805182815260208101899052808201889052606081018490526080810186905260a0810185905290516001600160a01b038b169182917fc16f4e4ca34d790de4c656c72fd015c667d688f20be64eea360618545c4c530f9181900360c00190a350610d5b565b6000610cf28887611605565b9050610cff898287611891565b6040805182815260208101899052808201889052606081018690526080810185905290516001600160a01b038b16917f44bd20a79e993bdcc7cbedf54a3b4d19fb78490124b6b90d04fe3242eea579e8919081900360a00190a2505b6040805188815290516000916001600160a01b038b16917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050505050505050565b603f546001600160a01b031690565b6000610dbf61095f565b6001600160a01b0316610dd06115a8565b6001600160a01b03161460405180604001604052806002815260200161323960f01b81525090610e415760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610acc578181015183820152602001610ab4565b50610e4a611bd9565b846001600160a01b0316866001600160a01b031614610e6e57610e6e8587866118d3565b600080610e7a876115ac565b9250925050610e87610806565b808452603b546080850152610e9c908761199b565b60028190556020840152610eaf86611647565b6040840152610f0d610ec9610ec4848961199b565b611647565b6040850151610bc990610edc90896114d5565b610f07610ee887611647565b6001600160a01b038d166000908152603d6020526040902054906114d5565b9061199b565b60608401819052604080518082019091526002815261373960f01b6020820152906fffffffffffffffffffffffffffffffff1015610f8c5760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610acc578181015183820152602001610ab4565b5060608301516001600160a01b0388166000908152603d6020908152604080832093909355603c8152919020805464ffffffffff421664ffffffffff199182168117909255603e8054909116909117905583015161102290610fed90611647565b610bc96110078660400151896114d590919063ffffffff16565b610f076110178860000151611647565b6080890151906114d5565b603b81905560808401526110418761103a888461199b565b85516117cc565b6040805187815290516001600160a01b038916916000917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a3866001600160a01b0316886001600160a01b03167fc16f4e4ca34d790de4c656c72fd015c667d688f20be64eea360618545c4c530f888585886060015189608001518a6020015160405180878152602001868152602001858152602001848152602001838152602001828152602001965050505050505060405180910390a350159695505050505050565b600181565b80603a600061111f6115a8565b6001600160a01b03908116825260208083019390935260409182016000908120918716808252919093529120919091556111576115a8565b6001600160a01b03167fda919360433220e13b51e8c211e490d148e61a3bd53de8c097194e458b97f3e1611189610da6565b604080516001600160a01b039092168252602082018690528051918290030190a35050565b60006111b86119f5565b60075490915060ff16806111cf57506111cf6119fa565b806111db575060065481115b6112165760405162461bcd60e51b815260040180806020018281038252602e815260200180611cbd602e913960400191505060405180910390fd5b60075460ff16158015611236576007805460ff1916600117905560068290555b61123f86611a00565b61124885611a17565b61125187611a2a565b603e805465010000000000600160c81b031916650100000000006001600160a01b038d811691820292909217909255603f80546001600160a01b03199081168d841690811790925560408054909116928c169283178155805192835260ff8b1660208085019190915260a09184018281528b51928501929092528a5192937f40251fbfb6656cfa65a00d7879029fec1fad21d28fdcff2f4f68f52795b74f2c938e938e938e938e938e938e9390916060840191608085019160c08601918a019080838360005b8381101561132f578181015183820152602001611317565b50505050905090810190601f16801561135c5780820380516001836020036101000a031916815260200191505b50848103835287518152875160209182019189019080838360005b8381101561138f578181015183820152602001611377565b50505050905090810190601f1680156113bc5780820380516001836020036101000a031916815260200191505b508481038252858152602001868680828437600083820152604051601f909101601f19169092018290039b50909950505050505050505050a38015611406576007805460ff191690555b50505050505050505050565b60006108df826114a6565b603e5464ffffffffff1690565b6001600160a01b03166000908152603d602052604090205490565b603b5460009081906114568161145e565b925090509091565b6000806114696115a2565b90508061147a57600091505061095a565b603e5460009061149290859064ffffffffff166114c1565b905061149e82826114d5565b949350505050565b6001600160a01b031660009081526020819052604090205490565b60006114ce838342611a40565b9392505050565b60008215806114e2575081155b156114ef575060006108df565b816b019d971e4fe8401e74000000198161150557fe5b0483111560405180604001604052806002815260200161068760f31b815250906115705760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610acc578181015183820152602001610ab4565b50506b033b2e3c9fd0803ce800000091026b019d971e4fe8401e74000000010490565b6040546001600160a01b031690565b60025490565b3390565b6000806000806115bb856114a6565b9050806115d3576000806000935093509350506115fe565b60006115e8826115e2886108e5565b90611605565b9050816115f5818361199b565b90955093509150505b9193909250565b60006114ce83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611b16565b6000633b9aca0082810290839082041460405180604001604052806002815260200161068760f31b815250906116be5760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610acc578181015183820152602001610ab4565b5092915050565b604080518082019091526002815261035360f41b60208201526000908261172d5760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610acc578181015183820152602001610ab4565b5060408051808201909152600280825261068760f31b60208301528304906b033b2e3c9fd0803ce80000008219048511156117a95760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610acc578181015183820152602001610ab4565b5082816b033b2e3c9fd0803ce8000000860201816117c357fe5b04949350505050565b6001600160a01b0383166000908152602081905260409020546117ef818461199b565b6001600160a01b0380861660009081526020819052604090819020929092559054161561188b576040805481516318c39f1760e11b81526001600160a01b0387811660048301526024820186905260448201859052925192909116916331873e2e9160648082019260009290919082900301818387803b15801561187257600080fd5b505af1158015611886573d6000803e3d6000fd5b505050505b50505050565b6001600160a01b038316600090815260208181526040918290205482518084019093526002835261038360f41b91830191909152906117ef9082908590611b16565b6040805180820182526002815261353960f01b6020808301919091526001600160a01b038087166000908152603a8352848120918716815291529182205461191c918490611b16565b6001600160a01b038086166000818152603a60209081526040808320948916808452949091529020839055919250907fda919360433220e13b51e8c211e490d148e61a3bd53de8c097194e458b97f3e1611974610da6565b604080516001600160a01b039092168252602082018690528051918290030190a350505050565b6000828201838110156114ce576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b600290565b303b1590565b8051611a13906003906020840190611c08565b5050565b8051611a13906004906020840190611c08565b6005805460ff191660ff92909216919091179055565b600080611a548364ffffffffff8616611605565b905080611a6b57611a63611b70565b9150506114ce565b6000198101600060028311611a81576000611a86565b600283035b90506301e1338087046000611a9b82806114d5565b90506000611aa982846114d5565b905060006002611ac384611abd8a8a611b80565b90611b80565b81611aca57fe5b04905060006006611ae184611abd89818d8d611b80565b81611ae857fe5b049050611b0681610f078481611afe8a8e611b80565b610f07611b70565b9c9b505050505050505050505050565b60008184841115611b685760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610acc578181015183820152602001610ab4565b505050900390565b6b033b2e3c9fd0803ce800000090565b600082611b8f575060006108df565b82820282848281611b9c57fe5b04146114ce5760405162461bcd60e51b8152600401808060200182810382526021815260200180611c9c6021913960400191505060405180910390fd5b6040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10611c4957805160ff1916838001178555611c76565b82800160010185558215611c76579182015b82811115611c76578251825591602001919060010190611c5b565b50611c82929150611c86565b5090565b5b80821115611c825760008155600101611c8756fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a6564a26469706673582212201edb86d1789ad66f525792180946e1fd44217e5313a6c3adfa9a1eb776a329b264736f6c634300060c0033";
