/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { AToken } from "./AToken";

export class ATokenFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<AToken> {
    return super.deploy(overrides || {}) as Promise<AToken>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): AToken {
    return super.attach(address) as AToken;
  }
  connect(signer: Signer): ATokenFactory {
    return super.connect(signer) as ATokenFactory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): AToken {
    return new Contract(address, _abi, signerOrProvider) as AToken;
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
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "BalanceTransfer",
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
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
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
        name: "treasury",
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
        name: "aTokenDecimals",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "string",
        name: "aTokenName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "aTokenSymbol",
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
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
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
    name: "ATOKEN_REVISION",
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
    inputs: [],
    name: "EIP712_REVISION",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PERMIT_TYPEHASH",
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
    name: "RESERVE_TREASURY_ADDRESS",
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
        name: "",
        type: "address",
      },
    ],
    name: "_nonces",
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
        name: "user",
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
        name: "user",
        type: "address",
      },
      {
        internalType: "address",
        name: "receiverOfUnderlying",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "index",
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
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getScaledUserBalanceAndSupply",
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
    name: "handleRepayment",
    outputs: [],
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
        name: "treasury",
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
        name: "aTokenDecimals",
        type: "uint8",
      },
      {
        internalType: "string",
        name: "aTokenName",
        type: "string",
      },
      {
        internalType: "string",
        name: "aTokenSymbol",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "index",
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
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "mintToTreasury",
    outputs: [],
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
        name: "user",
        type: "address",
      },
    ],
    name: "scaledBalanceOf",
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
    name: "scaledTotalSupply",
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
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferOnLiquidation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferUnderlyingTo",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052600080553480156200001557600080fd5b50604080518082018252600b8082526a105513d2d15397d253541360aa1b60208084018281528551808701909652928552840152815191929160009162000060916037919062000094565b5081516200007690603890602085019062000094565b506039805460ff191660ff9290921691909117905550620001309050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620000d757805160ff191683800117855562000107565b8280016001018555821562000107579182015b8281111562000107578251825591602001919060010190620000ea565b506200011592915062000119565b5090565b5b808211156200011557600081556001016200011a565b61282280620001406000396000f3fe608060405234801561001057600080fd5b50600436106101e55760003560e01c80637535d2461161010f578063ae167335116100a2578063d505accf11610071578063d505accf146106aa578063d7020d0a146106fb578063dd62ed3e14610737578063f866c31914610765576101e5565b8063ae1673351461066c578063b16a19de14610674578063b1bf962d1461067c578063b9844d8d14610684576101e5565b806388dd91a1116100de57806388dd91a1146105e057806395d89b411461060c578063a457c2d714610614578063a9059cbb14610640576101e5565b80637535d2461461058957806375d26413146105ad57806378160376146105b55780637df5bd3b146105bd576101e5565b80631da24f3e116101875780633644e515116101565780633644e51514610503578063395093511461050b5780634efecaa51461053757806370a0823114610563576101e5565b80631da24f3e1461048157806323b872dd146104a757806330adf81f146104dd578063313ce567146104e5576101e5565b80630bd7ad3b116101c35780630bd7ad3b146102e6578063156e29f61461030057806318160ddd14610332578063183fb4131461033a576101e5565b806306fdde03146101ea578063095ea7b3146102675780630afbcdc9146102a7575b600080fd5b6101f261079b565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561022c578181015183820152602001610214565b50505050905090810190601f1680156102595780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102936004803603604081101561027d57600080fd5b506001600160a01b038135169060200135610832565b604080519115158252519081900360200190f35b6102cd600480360360208110156102bd57600080fd5b50356001600160a01b0316610850565b6040805192835260208301919091528051918290030190f35b6102ee61086d565b60408051918252519081900360200190f35b6102936004803603606081101561031657600080fd5b506001600160a01b038135169060208101359060400135610872565b6102ee610a40565b61047f600480360361010081101561035157600080fd5b6001600160a01b038235811692602081013582169260408201358316926060830135169160ff6080820135169181019060c0810160a082013564010000000081111561039c57600080fd5b8201836020820111156103ae57600080fd5b803590602001918460018302840111640100000000831117156103d057600080fd5b9193909290916020810190356401000000008111156103ee57600080fd5b82018360208201111561040057600080fd5b8035906020019184600183028401116401000000008311171561042257600080fd5b91939092909160208101903564010000000081111561044057600080fd5b82018360208201111561045257600080fd5b8035906020019184600183028401116401000000008311171561047457600080fd5b509092509050610aea565b005b6102ee6004803603602081101561049757600080fd5b50356001600160a01b0316610e67565b610293600480360360608110156104bd57600080fd5b506001600160a01b03813581169160208101359091169060400135610e72565b6102ee610f32565b6104ed610f56565b6040805160ff9092168252519081900360200190f35b6102ee610f5f565b6102936004803603604081101561052157600080fd5b506001600160a01b038135169060200135610f65565b6102ee6004803603604081101561054d57600080fd5b506001600160a01b038135169060200135610fb3565b6102ee6004803603602081101561057957600080fd5b50356001600160a01b0316611059565b6105916110e8565b604080516001600160a01b039092168252519081900360200190f35b6105916110f7565b6101f2611106565b61047f600480360360408110156105d357600080fd5b5080359060200135611123565b61047f600480360360408110156105f657600080fd5b506001600160a01b03813516906020013561124a565b6101f26112d4565b6102936004803603604081101561062a57600080fd5b506001600160a01b038135169060200135611335565b6102936004803603604081101561065657600080fd5b506001600160a01b03813516906020013561139d565b6105916113fa565b610591611409565b6102ee611418565b6102ee6004803603602081101561069a57600080fd5b50356001600160a01b0316611422565b61047f600480360360e08110156106c057600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c00135611434565b61047f6004803603608081101561071157600080fd5b506001600160a01b0381358116916020810135909116906040810135906060013561167b565b6102ee6004803603604081101561074d57600080fd5b506001600160a01b0381358116916020013516611820565b61047f6004803603606081101561077b57600080fd5b506001600160a01b0381358116916020810135909116906040013561184b565b60378054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156108275780601f106107fc57610100808354040283529160200191610827565b820191906000526020600020905b81548152906001019060200180831161080a57829003601f168201915b505050505090505b90565b600061084661083f61191c565b8484611920565b5060015b92915050565b60008061085c83611a0c565b610864611a27565b91509150915091565b600181565b603c546000906001600160a01b031661088961191c565b6001600160a01b03161460405180604001604052806002815260200161323960f01b815250906109375760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156108fc5781810151838201526020016108e4565b50505050905090810190601f1680156109295780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600061094385611a0c565b905060006109518585611a2d565b6040805180820190915260028152611a9b60f11b6020820152909150816109b95760405162461bcd60e51b81526020600482018181528351602484015283519092839260449091019190850190808383600083156108fc5781810151838201526020016108e4565b506109c48682611b34565b6040805186815290516001600160a01b038816916000916000805160206127148339815191529181900360200190a3604080518681526020810186905281516001600160a01b038916927f4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f928290030190a25015949350505050565b600080610a4b611a27565b905080610a5c57600091505061082f565b603c54603e546040805163d15e005360e01b81526001600160a01b0392831660048201529051610ae493929092169163d15e005391602480820192602092909190829003018186803b158015610ab157600080fd5b505afa158015610ac5573d6000803e3d6000fd5b505050506040513d6020811015610adb57600080fd5b50518290611c85565b91505090565b6000610af4611d43565b60015490915060ff1680610b0b5750610b0b611d48565b80610b17575060005481115b610b525760405162461bcd60e51b815260040180806020018281038252602e8152602001806126e6602e913960400191505060405180910390fd5b60015460ff16158015610b71576001805460ff19168117905560008290555b60004690507f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f89896040518083838082843780830192505050925050506040518091039020604051806040016040528060018152602001603160f81b81525080519060200120833060405160200180868152602001858152602001848152602001838152602001826001600160a01b031681526020019550505050505060405160208183030381529060405280519060200120603b81905550610c6989898080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611d4e92505050565b610ca887878080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611d6192505050565b610cb18a611d74565b8d603c60006101000a8154816001600160a01b0302191690836001600160a01b031602179055508c603d60006101000a8154816001600160a01b0302191690836001600160a01b031602179055508b603e60006101000a8154816001600160a01b0302191690836001600160a01b031602179055508a603f60006101000a8154816001600160a01b0302191690836001600160a01b031602179055508d6001600160a01b03168c6001600160a01b03167fb19e051f8af41150ccccb3fc2c2d8d15f4a4cf434f32a559ba75fe73d6eea20b8f8e8e8e8e8e8e8e8e604051808a6001600160a01b03168152602001896001600160a01b031681526020018860ff16815260200180602001806020018060200184810384528a8a82818152602001925080828437600083820152601f01601f191690910185810384528881526020019050888880828437600083820152601f01601f191690910185810383528681526020019050868680828437600083820152604051601f909101601f19169092018290039e50909c50505050505050505050505050a3508015610e58576001805460ff191690555b50505050505050505050505050565b600061084a82611a0c565b6000610e7f848484611d8a565b610eef84610e8b61191c565b610eea856040518060600160405280602881526020016126be602891396001600160a01b038a16600090815260356020526040812090610ec961191c565b6001600160a01b031681526020810191909152604001600020549190611d97565b611920565b826001600160a01b0316846001600160a01b0316600080516020612714833981519152846040518082815260200191505060405180910390a35060019392505050565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b60395460ff1690565b603b5481565b6000610846610f7261191c565b84610eea8560356000610f8361191c565b6001600160a01b03908116825260208083019390935260409182016000908120918c168152925290205490611df1565b603c546000906001600160a01b0316610fca61191c565b6001600160a01b03161460405180604001604052806002815260200161323960f01b8152509061103b5760405162461bcd60e51b81526020600482018181528351602484015283519092839260449091019190850190808383600083156108fc5781810151838201526020016108e4565b50603e54611053906001600160a01b03168484611e52565b50919050565b603c54603e546040805163d15e005360e01b81526001600160a01b039283166004820152905160009361084a93169163d15e0053916024808301926020929190829003018186803b1580156110ad57600080fd5b505afa1580156110c1573d6000803e3d6000fd5b505050506040513d60208110156110d757600080fd5b50516110e284611a0c565b90611c85565b603c546001600160a01b031690565b6000611101611ea4565b905090565b604051806040016040528060018152602001603160f81b81525081565b603c546001600160a01b031661113761191c565b6001600160a01b03161460405180604001604052806002815260200161323960f01b815250906111a85760405162461bcd60e51b81526020600482018181528351602484015283519092839260449091019190850190808383600083156108fc5781810151838201526020016108e4565b50816111b357611246565b603d546001600160a01b03166111d2816111cd8585611a2d565b611b34565b6040805184815290516001600160a01b038316916000916000805160206127148339815191529181900360200190a3604080518481526020810184905281516001600160a01b038416927f4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f928290030190a2505b5050565b603c546001600160a01b031661125e61191c565b6001600160a01b03161460405180604001604052806002815260200161323960f01b815250906112cf5760405162461bcd60e51b81526020600482018181528351602484015283519092839260449091019190850190808383600083156108fc5781810151838201526020016108e4565b505050565b60388054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156108275780601f106107fc57610100808354040283529160200191610827565b600061084661134261191c565b84610eea856040518060600160405280602581526020016127c8602591396035600061136c61191c565b6001600160a01b03908116825260208083019390935260409182016000908120918d16815292529020549190611d97565b60006113b16113aa61191c565b8484611d8a565b826001600160a01b03166113c361191c565b6001600160a01b0316600080516020612714833981519152846040518082815260200191505060405180910390a350600192915050565b603d546001600160a01b031690565b603e546001600160a01b031690565b6000611101611a27565b603a6020526000908152604090205481565b6001600160a01b03871661147f576040805162461bcd60e51b815260206004820152600d60248201526c24a72b20a624a22fa7aba722a960991b604482015290519081900360640190fd5b834211156114c9576040805162461bcd60e51b815260206004820152601260248201527124a72b20a624a22fa2ac2824a920aa24a7a760711b604482015290519081900360640190fd5b6001600160a01b038088166000818152603a6020908152604080832054603b5482517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98186015280840196909652958c166060860152608085018b905260a0850181905260c08086018b90528251808703909101815260e08601835280519084012061190160f01b6101008701526101028601969096526101228086019690965281518086039096018652610142850180835286519684019690962093909552610162840180825283905260ff88166101828501526101a284018790526101c284018690525191926001926101e28083019392601f198301929081900390910190855afa1580156115de573d6000803e3d6000fd5b505050602060405103516001600160a01b0316896001600160a01b031614611641576040805162461bcd60e51b8152602060048201526011602482015270494e56414c49445f5349474e415455524560781b604482015290519081900360640190fd5b61164c826001611df1565b6001600160a01b038a166000908152603a6020526040902055611670898989611920565b505050505050505050565b603c546001600160a01b031661168f61191c565b6001600160a01b03161460405180604001604052806002815260200161323960f01b815250906117005760405162461bcd60e51b81526020600482018181528351602484015283519092839260449091019190850190808383600083156108fc5781810151838201526020016108e4565b50600061170d8383611a2d565b60408051808201909152600281526106a760f31b6020820152909150816117755760405162461bcd60e51b81526020600482018181528351602484015283519092839260449091019190850190808383600083156108fc5781810151838201526020016108e4565b506117808582611eb3565b603e54611797906001600160a01b03168585611e52565b6040805184815290516000916001600160a01b038816916000805160206127148339815191529181900360200190a3836001600160a01b0316856001600160a01b03167f5d624aa9c148153ab3446c1b154f660ee7701e549fe9b62dab7171b1c80e6fa28585604051808381526020018281526020019250505060405180910390a35050505050565b6001600160a01b03918216600090815260356020908152604080832093909416825291909152205490565b603c546001600160a01b031661185f61191c565b6001600160a01b03161460405180604001604052806002815260200161323960f01b815250906118d05760405162461bcd60e51b81526020600482018181528351602484015283519092839260449091019190850190808383600083156108fc5781810151838201526020016108e4565b506118de8383836000611f57565b816001600160a01b0316836001600160a01b0316600080516020612714833981519152836040518082815260200191505060405180910390a3505050565b3390565b6001600160a01b0383166119655760405162461bcd60e51b815260040180806020018281038252602481526020018061277a6024913960400191505060405180910390fd5b6001600160a01b0382166119aa5760405162461bcd60e51b81526004018080602001828103825260228152602001806126766022913960400191505060405180910390fd5b6001600160a01b03808416600081815260356020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b031660009081526034602052604090205490565b60365490565b604080518082019091526002815261035360f41b602082015260009082611a955760405162461bcd60e51b81526020600482018181528351602484015283519092839260449091019190850190808383600083156108fc5781810151838201526020016108e4565b5060408051808201909152600280825261068760f31b60208301528304906b033b2e3c9fd0803ce8000000821904851115611b115760405162461bcd60e51b81526020600482018181528351602484015283519092839260449091019190850190808383600083156108fc5781810151838201526020016108e4565b5082816b033b2e3c9fd0803ce800000086020181611b2b57fe5b04949350505050565b6001600160a01b038216611b8f576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b611b9b600083836112cf565b603654611ba88183611df1565b6036556001600160a01b038316600090815260346020526040902054611bce8184611df1565b6001600160a01b038516600090815260346020526040812091909155611bf2611ea4565b6001600160a01b031614611c7f57611c08611ea4565b6001600160a01b03166331873e2e8584846040518463ffffffff1660e01b815260040180846001600160a01b031681526020018381526020018281526020019350505050600060405180830381600087803b158015611c6657600080fd5b505af1158015611c7a573d6000803e3d6000fd5b505050505b50505050565b6000821580611c92575081155b15611c9f5750600061084a565b816b019d971e4fe8401e740000001981611cb557fe5b0483111560405180604001604052806002815260200161068760f31b81525090611d205760405162461bcd60e51b81526020600482018181528351602484015283519092839260449091019190850190808383600083156108fc5781810151838201526020016108e4565b50506b033b2e3c9fd0803ce800000091026b019d971e4fe8401e74000000010490565b600190565b303b1590565b805161124690603790602084019061259d565b805161124690603890602084019061259d565b6039805460ff191660ff92909216919091179055565b6112cf8383836001611f57565b60008184841115611de95760405162461bcd60e51b81526020600482018181528351602484015283519092839260449091019190850190808383600083156108fc5781810151838201526020016108e4565b505050900390565b600082820183811015611e4b576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526112cf908490612100565b603f546001600160a01b031690565b6001600160a01b038216611ef85760405162461bcd60e51b81526004018080602001828103825260218152602001806127346021913960400191505060405180910390fd5b611f04826000836112cf565b603654611f1181836122b8565b6036556001600160a01b0383166000908152603460209081526040918290205482516060810190935260228084529092611bce9286929061265490830139839190611d97565b603e54603c546040805163d15e005360e01b81526001600160a01b03938416600482018190529151919390921691600091839163d15e0053916024808301926020929190829003018186803b158015611faf57600080fd5b505afa158015611fc3573d6000803e3d6000fd5b505050506040513d6020811015611fd957600080fd5b505190506000611fec826110e28a611a0c565b90506000611ffd836110e28a611a0c565b9050612013898961200e8a87611a2d565b6122fa565b85156120a2576040805163d5ed393360e01b81526001600160a01b0387811660048301528b811660248301528a81166044830152606482018a90526084820185905260a4820184905291519186169163d5ed39339160c48082019260009290919082900301818387803b15801561208957600080fd5b505af115801561209d573d6000803e3d6000fd5b505050505b876001600160a01b0316896001600160a01b03167f4beccb90f994c31aced7a23b5611020728a23d8ec5cddd1a3e9d97b96fda86668986604051808381526020018281526020019250505060405180910390a3505050505050505050565b612112826001600160a01b0316612561565b612163576040805162461bcd60e51b815260206004820152601f60248201527f5361666545524332303a2063616c6c20746f206e6f6e2d636f6e747261637400604482015290519081900360640190fd5b60006060836001600160a01b0316836040518082805190602001908083835b602083106121a15780518252601f199092019160209182019101612182565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114612203576040519150601f19603f3d011682016040523d82523d6000602084013e612208565b606091505b50915091508161225f576040805162461bcd60e51b815260206004820181905260248201527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564604482015290519081900360640190fd5b805115611c7f5780806020019051602081101561227b57600080fd5b5051611c7f5760405162461bcd60e51b815260040180806020018281038252602a81526020018061279e602a913960400191505060405180910390fd5b6000611e4b83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611d97565b6001600160a01b03831661233f5760405162461bcd60e51b81526004018080602001828103825260258152602001806127556025913960400191505060405180910390fd5b6001600160a01b0382166123845760405162461bcd60e51b81526004018080602001828103825260238152602001806126316023913960400191505060405180910390fd5b61238f8383836112cf565b600060346000856001600160a01b03166001600160a01b031681526020019081526020016000205490506123de8260405180606001604052806026815260200161269860269139839190611d97565b6001600160a01b03808616600090815260346020526040808220939093559085168152205461240d8184611df1565b6001600160a01b038516600090815260346020526040812091909155612431611ea4565b6001600160a01b03161461255a5760365461244a611ea4565b6001600160a01b03166331873e2e8783866040518463ffffffff1660e01b815260040180846001600160a01b031681526020018381526020018281526020019350505050600060405180830381600087803b1580156124a857600080fd5b505af11580156124bc573d6000803e3d6000fd5b50505050846001600160a01b0316866001600160a01b031614612558576124e1611ea4565b6001600160a01b03166331873e2e8683856040518463ffffffff1660e01b815260040180846001600160a01b031681526020018381526020018281526020019350505050600060405180830381600087803b15801561253f57600080fd5b505af1158015612553573d6000803e3d6000fd5b505050505b505b5050505050565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47081811480159061259557508115155b949350505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106125de57805160ff191683800117855561260b565b8280016001018555821561260b579182015b8281111561260b5782518255916020019190600101906125f0565b5061261792915061261b565b5090565b5b80821115612617576000815560010161261c56fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e6365436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a6564ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef45524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f20616464726573735361666545524332303a204552433230206f7065726174696f6e20646964206e6f74207375636365656445524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa2646970667358221220e9ddd5f1b10c3e319b968cd89b3883e1216d5db157f340f2456758631c50ef0164736f6c634300060c0033";
