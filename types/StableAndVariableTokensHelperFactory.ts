/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { StableAndVariableTokensHelper } from "./StableAndVariableTokensHelper";

export class StableAndVariableTokensHelperFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _pool: string,
    _addressesProvider: string,
    overrides?: Overrides
  ): Promise<StableAndVariableTokensHelper> {
    return super.deploy(
      _pool,
      _addressesProvider,
      overrides || {}
    ) as Promise<StableAndVariableTokensHelper>;
  }
  getDeployTransaction(
    _pool: string,
    _addressesProvider: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _pool,
      _addressesProvider,
      overrides || {}
    );
  }
  attach(address: string): StableAndVariableTokensHelper {
    return super.attach(address) as StableAndVariableTokensHelper;
  }
  connect(signer: Signer): StableAndVariableTokensHelperFactory {
    return super.connect(signer) as StableAndVariableTokensHelperFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StableAndVariableTokensHelper {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as StableAndVariableTokensHelper;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_pool",
        type: "address",
      },
      {
        internalType: "address",
        name: "_addressesProvider",
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
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "stableToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "variableToken",
        type: "address",
      },
    ],
    name: "deployedContracts",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "tokens",
        type: "address[]",
      },
      {
        internalType: "string[]",
        name: "symbols",
        type: "string[]",
      },
    ],
    name: "initDeployment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "assets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "rates",
        type: "uint256[]",
      },
      {
        internalType: "address",
        name: "oracle",
        type: "address",
      },
    ],
    name: "setOracleBorrowRates",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "oracle",
        type: "address",
      },
      {
        internalType: "address",
        name: "admin",
        type: "address",
      },
    ],
    name: "setOracleOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516141c43803806141c483398101604081905261002f916100b8565b60006100396100b4565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350600180546001600160a01b039384166001600160a01b03199182161790915560028054929093169116179055610109565b3390565b600080604083850312156100ca578182fd5b82516100d5816100f1565b60208401519092506100e6816100f1565b809150509250929050565b6001600160a01b038116811461010657600080fd5b50565b6140ac806101186000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806354fe1c9414610067578063563b1cb31461007c578063715018a61461008f5780638da5cb5b14610097578063c2d30321146100b5578063f2fde38b146100c8575b600080fd5b61007a610075366004610680565b6100db565b005b61007a61008a366004610648565b610203565b61007a610361565b61009f6103e0565b6040516100ac919061076a565b60405180910390f35b61007a6100c33660046106e9565b6103ef565b61007a6100d6366004610609565b6104ec565b6100e36105a2565b6000546001600160a01b039081169116146101195760405162461bcd60e51b8152600401610110906107f7565b60405180910390fd5b8281146101385760405162461bcd60e51b8152600401610110906108bf565b6001546001600160a01b03166101605760405162461bcd60e51b81526004016101109061082c565b60005b838110156101fc577f1c1768aab1796270c7034dc781c2951065e6afb7a946269746521002443b8ea4604051610198906105a6565b604051809103906000f0801580156101b4573d6000803e3d6000fd5b506040516101c1906105b3565b604051809103906000f0801580156101dd573d6000803e3d6000fd5b506040516101ec92919061077e565b60405180910390a1600101610163565b5050505050565b61020b6105a2565b6000546001600160a01b039081169116146102385760405162461bcd60e51b8152600401610110906107f7565b6001600160a01b03811661025e5760405162461bcd60e51b815260040161011090610890565b306001600160a01b0316826001600160a01b0316638da5cb5b6040518163ffffffff1660e01b815260040160206040518083038186803b1580156102a157600080fd5b505afa1580156102b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102d9919061062c565b6001600160a01b0316146102ff5760405162461bcd60e51b815260040161011090610863565b60405163f2fde38b60e01b81526001600160a01b0383169063f2fde38b9061032b90849060040161076a565b600060405180830381600087803b15801561034557600080fd5b505af1158015610359573d6000803e3d6000fd5b505050505050565b6103696105a2565b6000546001600160a01b039081169116146103965760405162461bcd60e51b8152600401610110906107f7565b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000546001600160a01b031690565b6103f76105a2565b6000546001600160a01b039081169116146104245760405162461bcd60e51b8152600401610110906107f7565b8382146104435760405162461bcd60e51b8152600401610110906108bf565b60005b8481101561035957816001600160a01b03166372eb293d87878481811061046957fe5b905060200201602081019061047e9190610609565b86868581811061048a57fe5b905060200201356040518363ffffffff1660e01b81526004016104ae929190610798565b600060405180830381600087803b1580156104c857600080fd5b505af11580156104dc573d6000803e3d6000fd5b5050600190920191506104469050565b6104f46105a2565b6000546001600160a01b039081169116146105215760405162461bcd60e51b8152600401610110906107f7565b6001600160a01b0381166105475760405162461bcd60e51b8152600401610110906107b1565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b3390565b611e648061090883390190565b61190b8061276c83390190565b60008083601f8401126105d1578182fd5b50813567ffffffffffffffff8111156105e8578182fd5b602083019150836020808302850101111561060257600080fd5b9250929050565b60006020828403121561061a578081fd5b8135610625816108ef565b9392505050565b60006020828403121561063d578081fd5b8151610625816108ef565b6000806040838503121561065a578081fd5b8235610665816108ef565b91506020830135610675816108ef565b809150509250929050565b60008060008060408587031215610695578182fd5b843567ffffffffffffffff808211156106ac578384fd5b6106b8888389016105c0565b909650945060208701359150808211156106d0578384fd5b506106dd878288016105c0565b95989497509550505050565b600080600080600060608688031215610700578081fd5b853567ffffffffffffffff80821115610717578283fd5b61072389838a016105c0565b9097509550602088013591508082111561073b578283fd5b50610748888289016105c0565b909450925050604086013561075c816108ef565b809150509295509295909350565b6001600160a01b0391909116815260200190565b6001600160a01b0392831681529116602082015260400190565b6001600160a01b03929092168252602082015260400190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6020808252601c908201527f506f6f6c2063616e206e6f74206265207a65726f206164647265737300000000604082015260600190565b6020808252601390820152723432b63832b91034b9903737ba1037bbb732b960691b604082015260600190565b6020808252601590820152746f776e65722063616e206e6f74206265207a65726f60581b604082015260600190565b602080825260169082015275082e4e4c2f2e640dcdee840e6c2daca40d8cadccee8d60531b604082015260600190565b6001600160a01b038116811461090457600080fd5b5056fe608060405260006006553480156200001657600080fd5b50604080518082018252600e8082526d111150951513d2d15397d253541360921b60208084018281528551808701909652928552840152815191929160009162000064916003919062000098565b5081516200007a90600490602085019062000098565b506005805460ff191660ff9290921691909117905550620001349050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620000db57805160ff19168380011785556200010b565b828001600101855582156200010b579182015b828111156200010b578251825591602001919060010190620000ee565b50620001199291506200011d565b5090565b5b808211156200011957600081556001016200011e565b611d2080620001446000396000f3fe608060405234801561001057600080fd5b50600436106101a95760003560e01c806395d89b41116100f9578063c04a8a1011610097578063dd62ed3e11610071578063dd62ed3e146106ab578063e7484890146106d9578063e78c9b3b146106e1578063f731e9be14610707576101a9565b8063c04a8a10146104b0578063c222ec8a146104dc578063c634dfaa14610685576101a9565b8063a9059cbb116100d3578063a9059cbb14610438578063b16a19de14610464578063b3f1c93d1461046c578063b9a7b622146104a8576101a9565b806395d89b41146104025780639dc29fac1461040a578063a457c2d7146102d9576101a9565b80636bd76d241161016657806375d264131161014057806375d264131461037d578063797743381461038557806379ce6b8c146103ba57806390f6fcf2146103fa576101a9565b80636bd76d241461030557806370a08231146103335780637535d24614610359576101a9565b806306fdde03146101ae578063095ea7b31461022b57806318160ddd1461026b57806323b872dd14610285578063313ce567146102bb57806339509351146102d9575b600080fd5b6101b6610728565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101f05781810151838201526020016101d8565b50505050905090810190601f16801561021d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102576004803603604081101561024157600080fd5b506001600160a01b0381351690602001356107be565b604080519115158252519081900360200190f35b610273610806565b60408051918252519081900360200190f35b6102576004803603606081101561029b57600080fd5b506001600160a01b03813581169160208101359091169060400135610818565b6102c3610860565b6040805160ff9092168252519081900360200190f35b610257600480360360408110156102ef57600080fd5b506001600160a01b038135169060200135610869565b6102736004803603604081101561031b57600080fd5b506001600160a01b03813581169160200135166108b8565b6102736004803603602081101561034957600080fd5b50356001600160a01b03166108e5565b61036161095f565b604080516001600160a01b039092168252519081900360200190f35b610361610977565b61038d610981565b6040805194855260208501939093528383019190915264ffffffffff166060830152519081900360800190f35b6103e0600480360360208110156103d057600080fd5b50356001600160a01b03166109b7565b6040805164ffffffffff9092168252519081900360200190f35b6102736109d9565b6101b66109df565b6104366004803603604081101561042057600080fd5b506001600160a01b038135169060200135610a40565b005b6102576004803603604081101561044e57600080fd5b506001600160a01b038135169060200135610818565b610361610da6565b6102576004803603608081101561048257600080fd5b506001600160a01b03813581169160208101359091169060408101359060600135610db5565b61027361110d565b610436600480360360408110156104c657600080fd5b506001600160a01b038135169060200135611112565b610436600480360360e08110156104f257600080fd5b6001600160a01b038235811692602081013582169260408201359092169160ff606083013516919081019060a08101608082013564010000000081111561053857600080fd5b82018360208201111561054a57600080fd5b8035906020019184600183028401116401000000008311171561056c57600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092959493602081019350359150506401000000008111156105bf57600080fd5b8201836020820111156105d157600080fd5b803590602001918460018302840111640100000000831117156105f357600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929594936020810193503591505064010000000081111561064657600080fd5b82018360208201111561065857600080fd5b8035906020019184600183028401116401000000008311171561067a57600080fd5b5090925090506111ae565b6102736004803603602081101561069b57600080fd5b50356001600160a01b0316611412565b610273600480360360408110156106c157600080fd5b506001600160a01b0381358116916020013516610869565b6103e061141d565b610273600480360360208110156106f757600080fd5b50356001600160a01b031661142a565b61070f611445565b6040805192835260208301919091528051918290030190f35b60038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156107b45780601f10610789576101008083540402835291602001916107b4565b820191906000526020600020905b81548152906001019060200180831161079757829003601f168201915b5050505050905090565b6040805162461bcd60e51b81526020600482015260166024820152751054141493d5905317d393d517d4d5541413d495115160521b6044820152905160009181900360640190fd5b6000610813603b5461145e565b905090565b6040805162461bcd60e51b81526020600482015260166024820152751514905394d1915497d393d517d4d5541413d495115160521b6044820152905160009181900360640190fd5b60055460ff1690565b6040805162461bcd60e51b815260206004820152601760248201527f414c4c4f57414e43455f4e4f545f535550504f525445440000000000000000006044820152905160009181900360640190fd5b6001600160a01b038083166000908152603a60209081526040808320938516835292905220545b92915050565b6000806108f1836114a6565b6001600160a01b0384166000908152603d60205260409020549091508161091d5760009250505061095a565b6001600160a01b0384166000908152603c602052604081205461094890839064ffffffffff166114c1565b905061095483826114d5565b93505050505b919050565b603e546501000000000090046001600160a01b031690565b6000610813611593565b6000806000806000603b5490506109966115a2565b61099f8261145e565b603e54919790965091945064ffffffffff1692509050565b6001600160a01b03166000908152603c602052604090205464ffffffffff1690565b603b5490565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156107b45780601f10610789576101008083540402835291602001916107b4565b610a4861095f565b6001600160a01b0316610a596115a8565b6001600160a01b03161460405180604001604052806002815260200161323960f01b81525090610b075760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610acc578181015183820152602001610ab4565b50505050905090810190601f168015610af95780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600080610b14846115ac565b92509250506000610b23610806565b6001600160a01b0386166000908152603d6020526040812054919250908190868411610b58576000603b819055600255610bda565b610b628488611605565b600281905591506000610b80610b7786611647565b603b54906114d5565b90506000610b97610b908a611647565b84906114d5565b9050818110610bb35760006002819055603b8190559450610bd7565b610bcf610bbf85611647565b610bc98484611605565b906116c5565b603b81905594505b50505b85871415610c18576001600160a01b0388166000908152603d60209081526040808320839055603c9091529020805464ffffffffff19169055610c46565b6001600160a01b0388166000908152603c60205260409020805464ffffffffff19164264ffffffffff161790555b603e805464ffffffffff19164264ffffffffff1617905586851115610ce6576000610c718689611605565b9050610c7e8982876117cc565b6040805182815260208101899052808201889052606081018490526080810186905260a0810185905290516001600160a01b038b169182917fc16f4e4ca34d790de4c656c72fd015c667d688f20be64eea360618545c4c530f9181900360c00190a350610d5b565b6000610cf28887611605565b9050610cff898287611891565b6040805182815260208101899052808201889052606081018690526080810185905290516001600160a01b038b16917f44bd20a79e993bdcc7cbedf54a3b4d19fb78490124b6b90d04fe3242eea579e8919081900360a00190a2505b6040805188815290516000916001600160a01b038b16917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050505050505050565b603f546001600160a01b031690565b6000610dbf61095f565b6001600160a01b0316610dd06115a8565b6001600160a01b03161460405180604001604052806002815260200161323960f01b81525090610e415760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610acc578181015183820152602001610ab4565b50610e4a611bd9565b846001600160a01b0316866001600160a01b031614610e6e57610e6e8587866118d3565b600080610e7a876115ac565b9250925050610e87610806565b808452603b546080850152610e9c908761199b565b60028190556020840152610eaf86611647565b6040840152610f0d610ec9610ec4848961199b565b611647565b6040850151610bc990610edc90896114d5565b610f07610ee887611647565b6001600160a01b038d166000908152603d6020526040902054906114d5565b9061199b565b60608401819052604080518082019091526002815261373960f01b6020820152906fffffffffffffffffffffffffffffffff1015610f8c5760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610acc578181015183820152602001610ab4565b5060608301516001600160a01b0388166000908152603d6020908152604080832093909355603c8152919020805464ffffffffff421664ffffffffff199182168117909255603e8054909116909117905583015161102290610fed90611647565b610bc96110078660400151896114d590919063ffffffff16565b610f076110178860000151611647565b6080890151906114d5565b603b81905560808401526110418761103a888461199b565b85516117cc565b6040805187815290516001600160a01b038916916000917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a3866001600160a01b0316886001600160a01b03167fc16f4e4ca34d790de4c656c72fd015c667d688f20be64eea360618545c4c530f888585886060015189608001518a6020015160405180878152602001868152602001858152602001848152602001838152602001828152602001965050505050505060405180910390a350159695505050505050565b600181565b80603a600061111f6115a8565b6001600160a01b03908116825260208083019390935260409182016000908120918716808252919093529120919091556111576115a8565b6001600160a01b03167fda919360433220e13b51e8c211e490d148e61a3bd53de8c097194e458b97f3e1611189610da6565b604080516001600160a01b039092168252602082018690528051918290030190a35050565b60006111b86119f5565b60075490915060ff16806111cf57506111cf6119fa565b806111db575060065481115b6112165760405162461bcd60e51b815260040180806020018281038252602e815260200180611cbd602e913960400191505060405180910390fd5b60075460ff16158015611236576007805460ff1916600117905560068290555b61123f86611a00565b61124885611a17565b61125187611a2a565b603e805465010000000000600160c81b031916650100000000006001600160a01b038d811691820292909217909255603f80546001600160a01b03199081168d841690811790925560408054909116928c169283178155805192835260ff8b1660208085019190915260a09184018281528b51928501929092528a5192937f40251fbfb6656cfa65a00d7879029fec1fad21d28fdcff2f4f68f52795b74f2c938e938e938e938e938e938e9390916060840191608085019160c08601918a019080838360005b8381101561132f578181015183820152602001611317565b50505050905090810190601f16801561135c5780820380516001836020036101000a031916815260200191505b50848103835287518152875160209182019189019080838360005b8381101561138f578181015183820152602001611377565b50505050905090810190601f1680156113bc5780820380516001836020036101000a031916815260200191505b508481038252858152602001868680828437600083820152604051601f909101601f19169092018290039b50909950505050505050505050a38015611406576007805460ff191690555b50505050505050505050565b60006108df826114a6565b603e5464ffffffffff1690565b6001600160a01b03166000908152603d602052604090205490565b603b5460009081906114568161145e565b925090509091565b6000806114696115a2565b90508061147a57600091505061095a565b603e5460009061149290859064ffffffffff166114c1565b905061149e82826114d5565b949350505050565b6001600160a01b031660009081526020819052604090205490565b60006114ce838342611a40565b9392505050565b60008215806114e2575081155b156114ef575060006108df565b816b019d971e4fe8401e74000000198161150557fe5b0483111560405180604001604052806002815260200161068760f31b815250906115705760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610acc578181015183820152602001610ab4565b50506b033b2e3c9fd0803ce800000091026b019d971e4fe8401e74000000010490565b6040546001600160a01b031690565b60025490565b3390565b6000806000806115bb856114a6565b9050806115d3576000806000935093509350506115fe565b60006115e8826115e2886108e5565b90611605565b9050816115f5818361199b565b90955093509150505b9193909250565b60006114ce83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611b16565b6000633b9aca0082810290839082041460405180604001604052806002815260200161068760f31b815250906116be5760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610acc578181015183820152602001610ab4565b5092915050565b604080518082019091526002815261035360f41b60208201526000908261172d5760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610acc578181015183820152602001610ab4565b5060408051808201909152600280825261068760f31b60208301528304906b033b2e3c9fd0803ce80000008219048511156117a95760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610acc578181015183820152602001610ab4565b5082816b033b2e3c9fd0803ce8000000860201816117c357fe5b04949350505050565b6001600160a01b0383166000908152602081905260409020546117ef818461199b565b6001600160a01b0380861660009081526020819052604090819020929092559054161561188b576040805481516318c39f1760e11b81526001600160a01b0387811660048301526024820186905260448201859052925192909116916331873e2e9160648082019260009290919082900301818387803b15801561187257600080fd5b505af1158015611886573d6000803e3d6000fd5b505050505b50505050565b6001600160a01b038316600090815260208181526040918290205482518084019093526002835261038360f41b91830191909152906117ef9082908590611b16565b6040805180820182526002815261353960f01b6020808301919091526001600160a01b038087166000908152603a8352848120918716815291529182205461191c918490611b16565b6001600160a01b038086166000818152603a60209081526040808320948916808452949091529020839055919250907fda919360433220e13b51e8c211e490d148e61a3bd53de8c097194e458b97f3e1611974610da6565b604080516001600160a01b039092168252602082018690528051918290030190a350505050565b6000828201838110156114ce576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b600190565b303b1590565b8051611a13906003906020840190611c08565b5050565b8051611a13906004906020840190611c08565b6005805460ff191660ff92909216919091179055565b600080611a548364ffffffffff8616611605565b905080611a6b57611a63611b70565b9150506114ce565b6000198101600060028311611a81576000611a86565b600283035b90506301e1338087046000611a9b82806114d5565b90506000611aa982846114d5565b905060006002611ac384611abd8a8a611b80565b90611b80565b81611aca57fe5b04905060006006611ae184611abd89818d8d611b80565b81611ae857fe5b049050611b0681610f078481611afe8a8e611b80565b610f07611b70565b9c9b505050505050505050505050565b60008184841115611b685760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610acc578181015183820152602001610ab4565b505050900390565b6b033b2e3c9fd0803ce800000090565b600082611b8f575060006108df565b82820282848281611b9c57fe5b04146114ce5760405162461bcd60e51b8152600401808060200182810382526021815260200180611c9c6021913960400191505060405180910390fd5b6040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10611c4957805160ff1916838001178555611c76565b82800160010185558215611c76579182015b82811115611c76578251825591602001919060010190611c5b565b50611c82929150611c86565b5090565b5b80821115611c825760008155600101611c8756fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a6564a26469706673582212206392aea8a9ac7fd6b6a14d10eed1efb201e6a80cfa3e13cc333b467dbacf558c64736f6c634300060c0033608060405260006006553480156200001657600080fd5b50604080518082018252600e8082526d111150951513d2d15397d253541360921b60208084018281528551808701909652928552840152815191929160009162000064916003919062000098565b5081516200007a90600490602085019062000098565b506005805460ff191660ff9290921691909117905550620001349050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620000db57805160ff19168380011785556200010b565b828001600101855582156200010b579182015b828111156200010b578251825591602001919060010190620000ee565b50620001199291506200011d565b5090565b5b808211156200011957600081556001016200011e565b6117c780620001446000396000f3fe608060405234801561001057600080fd5b506004361061014d5760003560e01c806375d26413116100c3578063b3f1c93d1161007c578063b3f1c93d146103d2578063b9a7b6221461040e578063c04a8a1014610416578063c222ec8a14610444578063dd62ed3e146105ed578063f5298aca1461061b5761014d565b806375d264131461038657806395d89b411461038e578063a457c2d7146102e2578063a9059cbb14610396578063b16a19de146103c2578063b1bf962d146103ca5761014d565b806323b872dd1161011557806323b872dd1461028e578063313ce567146102c457806339509351146102e25780636bd76d241461030e57806370a082311461033c5780637535d246146103625761014d565b806306fdde0314610152578063095ea7b3146101cf5780630afbcdc91461020f57806318160ddd1461024e5780631da24f3e14610268575b600080fd5b61015a61064d565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561019457818101518382015260200161017c565b50505050905090810190601f1680156101c15780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101fb600480360360408110156101e557600080fd5b506001600160a01b0381351690602001356106e3565b604080519115158252519081900360200190f35b6102356004803603602081101561022557600080fd5b50356001600160a01b031661072b565b6040805192835260208301919091528051918290030190f35b610256610748565b60408051918252519081900360200190f35b6102566004803603602081101561027e57600080fd5b50356001600160a01b03166107db565b6101fb600480360360608110156102a457600080fd5b506001600160a01b038135811691602081013590911690604001356107ee565b6102cc610836565b6040805160ff9092168252519081900360200190f35b6101fb600480360360408110156102f857600080fd5b506001600160a01b03813516906020013561083f565b6102566004803603604081101561032457600080fd5b506001600160a01b038135811691602001351661088e565b6102566004803603602081101561035257600080fd5b50356001600160a01b03166108bb565b61036a610967565b604080516001600160a01b039092168252519081900360200190f35b61036a610976565b61015a610980565b6101fb600480360360408110156103ac57600080fd5b506001600160a01b0381351690602001356107ee565b61036a6109e1565b6102566109f0565b6101fb600480360360808110156103e857600080fd5b506001600160a01b038135811691602081013590911690604081013590606001356109fa565b610256610c13565b6104426004803603604081101561042c57600080fd5b506001600160a01b038135169060200135610c18565b005b610442600480360360e081101561045a57600080fd5b6001600160a01b038235811692602081013582169260408201359092169160ff606083013516919081019060a0810160808201356401000000008111156104a057600080fd5b8201836020820111156104b257600080fd5b803590602001918460018302840111640100000000831117156104d457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929594936020810193503591505064010000000081111561052757600080fd5b82018360208201111561053957600080fd5b8035906020019184600183028401116401000000008311171561055b57600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092959493602081019350359150506401000000008111156105ae57600080fd5b8201836020820111156105c057600080fd5b803590602001918460018302840111640100000000831117156105e257600080fd5b509092509050610cb4565b6102566004803603604081101561060357600080fd5b506001600160a01b038135811691602001351661083f565b6104426004803603606081101561063157600080fd5b506001600160a01b038135169060208101359060400135610f03565b60038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156106d95780601f106106ae576101008083540402835291602001916106d9565b820191906000526020600020905b8154815290600101906020018083116106bc57829003601f168201915b5050505050905090565b6040805162461bcd60e51b81526020600482015260166024820152751054141493d5905317d393d517d4d5541413d495115160521b6044820152905160009181900360640190fd5b60008061073783611097565b61073f6110b2565b91509150915091565b603b54603c546040805163386497fd60e01b81526001600160a01b03928316600482015290516000936107d693169163386497fd916024808301926020929190829003018186803b15801561079c57600080fd5b505afa1580156107b0573d6000803e3d6000fd5b505050506040513d60208110156107c657600080fd5b50516107d06110b2565b906110b8565b905090565b60006107e682611097565b90505b919050565b6040805162461bcd60e51b81526020600482015260166024820152751514905394d1915497d393d517d4d5541413d495115160521b6044820152905160009181900360640190fd5b60055460ff1690565b6040805162461bcd60e51b815260206004820152601760248201527f414c4c4f57414e43455f4e4f545f535550504f525445440000000000000000006044820152905160009181900360640190fd5b6001600160a01b038083166000908152603a60209081526040808320938516835292905220545b92915050565b6000806108c783611097565b9050806108d85760009150506107e9565b603b54603c546040805163386497fd60e01b81526001600160a01b039283166004820152905161096093929092169163386497fd91602480820192602092909190829003018186803b15801561092d57600080fd5b505afa158015610941573d6000803e3d6000fd5b505050506040513d602081101561095757600080fd5b505182906110b8565b9392505050565b603b546001600160a01b031690565b60006107d6611176565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156106d95780601f106106ae576101008083540402835291602001916106d9565b603c546001600160a01b031690565b60006107d66110b2565b6000610a04610967565b6001600160a01b0316610a15611185565b6001600160a01b03161460405180604001604052806002815260200161323960f01b81525090610ac35760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610a88578181015183820152602001610a70565b50505050905090810190601f168015610ab55780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50836001600160a01b0316856001600160a01b031614610ae857610ae8848685611189565b6000610af385611097565b90506000610b018585611251565b6040805180820190915260028152611a9b60f11b602082015290915081610b695760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610a88578181015183820152602001610a70565b50610b748682611358565b6040805186815290516001600160a01b038816916000917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a3856001600160a01b0316876001600160a01b03167f2f00e3cdd69a77be7ed215ec7b2a36784dd158f921fca79ac29deffa353fe6ee8787604051808381526020018281526020019250505060405180910390a3501595945050505050565b600181565b80603a6000610c25611185565b6001600160a01b0390811682526020808301939093526040918201600090812091871680825291909352912091909155610c5d611185565b6001600160a01b03167fda919360433220e13b51e8c211e490d148e61a3bd53de8c097194e458b97f3e1610c8f6109e1565b604080516001600160a01b039092168252602082018690528051918290030190a35050565b6000610cbe6114a9565b60075490915060ff1680610cd55750610cd56114ae565b80610ce1575060065481115b610d1c5760405162461bcd60e51b815260040180806020018281038252602e815260200180611743602e913960400191505060405180910390fd5b60075460ff16158015610d3c576007805460ff1916600117905560068290555b610d45866114b4565b610d4e856114cb565b610d57876114de565b603b80546001600160a01b03808d166001600160a01b03199283168117909355603c80548d83169084168117909155603d8054928d169290931682179092556040805191825260ff8b1660208084019190915260a09183018281528b51928401929092528a517f40251fbfb6656cfa65a00d7879029fec1fad21d28fdcff2f4f68f52795b74f2c938e938e938e938e938e938e93919290916060840191608085019160c0860191908a019080838360005b83811015610e20578181015183820152602001610e08565b50505050905090810190601f168015610e4d5780820380516001836020036101000a031916815260200191505b50848103835287518152875160209182019189019080838360005b83811015610e80578181015183820152602001610e68565b50505050905090810190601f168015610ead5780820380516001836020036101000a031916815260200191505b508481038252858152602001868680828437600083820152604051601f909101601f19169092018290039b50909950505050505050505050a38015610ef7576007805460ff191690555b50505050505050505050565b610f0b610967565b6001600160a01b0316610f1c611185565b6001600160a01b03161460405180604001604052806002815260200161323960f01b81525090610f8d5760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610a88578181015183820152602001610a70565b506000610f9a8383611251565b60408051808201909152600281526106a760f31b6020820152909150816110025760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610a88578181015183820152602001610a70565b5061100d84826114f4565b6040805184815290516000916001600160a01b038716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a3604080518481526020810184905281516001600160a01b038716927f49995e5dd6158cf69ad3e9777c46755a1a826a446c6416992167462dad033b2a928290030190a250505050565b6001600160a01b031660009081526020819052604090205490565b60025490565b60008215806110c5575081155b156110d2575060006108b5565b816b019d971e4fe8401e7400000019816110e857fe5b0483111560405180604001604052806002815260200161068760f31b815250906111535760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610a88578181015183820152602001610a70565b50506b033b2e3c9fd0803ce800000091026b019d971e4fe8401e74000000010490565b603d546001600160a01b031690565b3390565b6040805180820182526002815261353960f01b6020808301919091526001600160a01b038087166000908152603a835284812091871681529152918220546111d2918490611592565b6001600160a01b038086166000818152603a60209081526040808320948916808452949091529020839055919250907fda919360433220e13b51e8c211e490d148e61a3bd53de8c097194e458b97f3e161122a6109e1565b604080516001600160a01b039092168252602082018690528051918290030190a350505050565b604080518082019091526002815261035360f41b6020820152600090826112b95760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610a88578181015183820152602001610a70565b5060408051808201909152600280825261068760f31b60208301528304906b033b2e3c9fd0803ce80000008219048511156113355760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610a88578181015183820152602001610a70565b5082816b033b2e3c9fd0803ce80000008602018161134f57fe5b04949350505050565b6001600160a01b0382166113b3576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b6113bf600083836115ec565b6002546113cc81836115f1565b6002556001600160a01b0383166000908152602081905260409020546113f281846115f1565b6001600160a01b038516600090815260208190526040812091909155611416611176565b6001600160a01b0316146114a35761142c611176565b6001600160a01b03166331873e2e8584846040518463ffffffff1660e01b815260040180846001600160a01b031681526020018381526020018281526020019350505050600060405180830381600087803b15801561148a57600080fd5b505af115801561149e573d6000803e3d6000fd5b505050505b50505050565b600190565b303b1590565b80516114c790600390602084019061168d565b5050565b80516114c790600490602084019061168d565b6005805460ff191660ff92909216919091179055565b6001600160a01b0382166115395760405162461bcd60e51b81526004018080602001828103825260218152602001806117716021913960400191505060405180910390fd5b611545826000836115ec565b600254611552818361164b565b6002556001600160a01b0383166000908152602081815260409182902054825160608101909352602280845290926113f292869290611721908301398391905b600081848411156115e45760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610a88578181015183820152602001610a70565b505050900390565b505050565b600082820183811015610960576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b600061096083836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611592565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106116ce57805160ff19168380011785556116fb565b828001600101855582156116fb579182015b828111156116fb5782518255916020019190600101906116e0565b5061170792915061170b565b5090565b5b80821115611707576000815560010161170c56fe45524332303a206275726e20616d6f756e7420657863656564732062616c616e6365436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a656445524332303a206275726e2066726f6d20746865207a65726f2061646472657373a26469706673582212207080ae0503824f92a0d823ccec9ef3b8f7ec3bb8e05a33c1faac01cc9d2aca4c64736f6c634300060c0033a2646970667358221220b3b930a2a34a658cee7fc949f189cb9867011c03eb2e85ffe7371789e8eb974564736f6c634300060c0033";
