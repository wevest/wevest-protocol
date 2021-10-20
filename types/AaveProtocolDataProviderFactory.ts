/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { AaveProtocolDataProvider } from "./AaveProtocolDataProvider";

export class AaveProtocolDataProviderFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    addressesProvider: string,
    overrides?: Overrides
  ): Promise<AaveProtocolDataProvider> {
    return super.deploy(
      addressesProvider,
      overrides || {}
    ) as Promise<AaveProtocolDataProvider>;
  }
  getDeployTransaction(
    addressesProvider: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(addressesProvider, overrides || {});
  }
  attach(address: string): AaveProtocolDataProvider {
    return super.attach(address) as AaveProtocolDataProvider;
  }
  connect(signer: Signer): AaveProtocolDataProviderFactory {
    return super.connect(signer) as AaveProtocolDataProviderFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AaveProtocolDataProvider {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as AaveProtocolDataProvider;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ILendingPoolAddressesProvider",
        name: "addressesProvider",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ADDRESSES_PROVIDER",
    outputs: [
      {
        internalType: "contract ILendingPoolAddressesProvider",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllATokens",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "symbol",
            type: "string",
          },
          {
            internalType: "address",
            name: "tokenAddress",
            type: "address",
          },
        ],
        internalType: "struct AaveProtocolDataProvider.TokenData[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllReservesTokens",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "symbol",
            type: "string",
          },
          {
            internalType: "address",
            name: "tokenAddress",
            type: "address",
          },
        ],
        internalType: "struct AaveProtocolDataProvider.TokenData[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
    ],
    name: "getReserveConfigurationData",
    outputs: [
      {
        internalType: "uint256",
        name: "decimals",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "ltv",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "liquidationThreshold",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "liquidationBonus",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reserveFactor",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "usageAsCollateralEnabled",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "borrowingEnabled",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "stableBorrowRateEnabled",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "isActive",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "isFrozen",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
    ],
    name: "getReserveData",
    outputs: [
      {
        internalType: "uint256",
        name: "availableLiquidity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalStableDebt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalVariableDebt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "liquidityRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "variableBorrowRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "stableBorrowRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "averageStableBorrowRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "liquidityIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "variableBorrowIndex",
        type: "uint256",
      },
      {
        internalType: "uint40",
        name: "lastUpdateTimestamp",
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
        name: "asset",
        type: "address",
      },
    ],
    name: "getReserveTokensAddresses",
    outputs: [
      {
        internalType: "address",
        name: "aTokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "stableDebtTokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "variableDebtTokenAddress",
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
        name: "asset",
        type: "address",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getUserReserveData",
    outputs: [
      {
        internalType: "uint256",
        name: "currentATokenBalance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "currentStableDebt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "currentVariableDebt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "principalStableDebt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "scaledVariableDebt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "stableBorrowRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "liquidityRate",
        type: "uint256",
      },
      {
        internalType: "uint40",
        name: "stableRateLastUpdated",
        type: "uint40",
      },
      {
        internalType: "bool",
        name: "usageAsCollateralEnabled",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b50604051611be3380380611be383398101604081905261002f91610044565b60601b6001600160601b031916608052610072565b600060208284031215610055578081fd5b81516001600160a01b038116811461006b578182fd5b9392505050565b60805160601c611b316100b26000398061015b528061019552806102ac52806107a75280610b2b5280610c7b5280610ff952806111295250611b316000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80633e1501411161005b5780633e150141146100f1578063b316ff891461011a578063d2493b6c1461012f578063f561ae41146101515761007d565b80630542975c1461008257806328dd2d01146100a057806335ea6a75146100c8575b600080fd5b61008a610159565b60405161009791906118e3565b60405180910390f35b6100b36100ae3660046115f5565b61017d565b60405161009799989796959493929190611a44565b6100db6100d63660046115b6565b61078e565b6040516100979a999897969594939291906119f8565b6101046100ff3660046115b6565b610b12565b6040516100979a999897969594939291906119a9565b610122610c75565b604051610097919061191a565b61014261013d3660046115b6565b610fea565b604051610097939291906118f7565b610122611123565b7f000000000000000000000000000000000000000000000000000000000000000081565b60008060008060008060008060006101936114b3565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316630261bf8b6040518163ffffffff1660e01b815260040160206040518083038186803b1580156101ec57600080fd5b505afa158015610200573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061022491906115d9565b6001600160a01b03166335ea6a758d6040518263ffffffff1660e01b815260040161024f91906118e3565b6101806040518083038186803b15801561026857600080fd5b505afa15801561027c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102a0919061177f565b90506102aa61151e565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316630261bf8b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561030357600080fd5b505afa158015610317573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061033b91906115d9565b6001600160a01b0316634417a5838d6040518263ffffffff1660e01b815260040161036691906118e3565b60206040518083038186803b15801561037e57600080fd5b505afa158015610392573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103b69190611764565b60e08301516040516370a0823160e01b81529192506001600160a01b0316906370a08231906103e9908f906004016118e3565b60206040518083038186803b15801561040157600080fd5b505afa158015610415573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610439919061187a565b6101208301516040516370a0823160e01b8152919c506001600160a01b0316906370a082319061046d908f906004016118e3565b60206040518083038186803b15801561048557600080fd5b505afa158015610499573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104bd919061187a565b6101008301516040516370a0823160e01b8152919a506001600160a01b0316906370a08231906104f1908f906004016118e3565b60206040518083038186803b15801561050957600080fd5b505afa15801561051d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610541919061187a565b61010083015160405163631a6fd560e11b8152919b506001600160a01b03169063c634dfaa90610575908f906004016118e3565b60206040518083038186803b15801561058d57600080fd5b505afa1580156105a1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105c5919061187a565b610120830151604051630ed1279f60e11b81529199506001600160a01b031690631da24f3e906105f9908f906004016118e3565b60206040518083038186803b15801561061157600080fd5b505afa158015610625573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610649919061187a565b965081606001516001600160801b031694508161010001516001600160a01b031663e78c9b3b8d6040518263ffffffff1660e01b815260040161068c91906118e3565b60206040518083038186803b1580156106a457600080fd5b505afa1580156106b8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106dc919061187a565b610100830151604051631e739ae360e21b81529197506001600160a01b0316906379ce6b8c90610710908f906004016118e3565b60206040518083038186803b15801561072857600080fd5b505afa15801561073c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107609190611892565b935061077d82610160015160ff16826113ea90919063ffffffff16565b925050509295985092959850929598565b6000806000806000806000806000806107a56114b3565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316630261bf8b6040518163ffffffff1660e01b815260040160206040518083038186803b1580156107fe57600080fd5b505afa158015610812573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061083691906115d9565b6001600160a01b03166335ea6a758d6040518263ffffffff1660e01b815260040161086191906118e3565b6101806040518083038186803b15801561087a57600080fd5b505afa15801561088e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108b2919061177f565b60e08101516040516370a0823160e01b81529192506001600160a01b038e16916370a08231916108e4916004016118e3565b60206040518083038186803b1580156108fc57600080fd5b505afa158015610910573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610934919061187a565b8161010001516001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561097257600080fd5b505afa158015610986573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109aa919061187a565b8261012001516001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b1580156109e857600080fd5b505afa1580156109fc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a20919061187a565b836060015184608001518560a001518661010001516001600160a01b03166390f6fcf26040518163ffffffff1660e01b815260040160206040518083038186803b158015610a6d57600080fd5b505afa158015610a81573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aa5919061187a565b876020015188604001518960c00151866001600160801b03169650856001600160801b03169550846001600160801b03169450826001600160801b03169250816001600160801b031691509a509a509a509a509a509a509a509a509a509a50509193959799509193959799565b600080600080600080600080600080610b2961151e565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316630261bf8b6040518163ffffffff1660e01b815260040160206040518083038186803b158015610b8257600080fd5b505afa158015610b96573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bba91906115d9565b6001600160a01b031663c44b11f78d6040518263ffffffff1660e01b8152600401610be591906118e3565b60206040518083038186803b158015610bfd57600080fd5b505afa158015610c11573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c359190611764565b9050610c408161144c565b909e50929c50909a5098509650610c5681611477565b9d9f9c9e509a9c999b989a8d15159a9099909850919650945092505050565b606060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316630261bf8b6040518163ffffffff1660e01b815260040160206040518083038186803b158015610cd257600080fd5b505afa158015610ce6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d0a91906115d9565b90506060816001600160a01b031663d1946dbc6040518163ffffffff1660e01b815260040160006040518083038186803b158015610d4757600080fd5b505afa158015610d5b573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610d83919081019061162d565b90506060815167ffffffffffffffff81118015610d9f57600080fd5b50604051908082528060200260200182016040528015610dd957816020015b610dc6611531565b815260200190600190039081610dbe5790505b50905060005b8251811015610fe257739f8f72aa9304c8b593d555f12ef6589cc3a579a26001600160a01b0316838281518110610e1257fe5b60200260200101516001600160a01b03161415610e915760405180604001604052806040518060400160405280600381526020016226a5a960e91b8152508152602001848381518110610e6157fe5b60200260200101516001600160a01b0316815250828281518110610e8157fe5b6020026020010181905250610fda565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6001600160a01b0316838281518110610ebb57fe5b60200260200101516001600160a01b03161415610f0a5760405180604001604052806040518060400160405280600381526020016208aa8960eb1b8152508152602001848381518110610e6157fe5b6040518060400160405280848381518110610f2157fe5b60200260200101516001600160a01b03166395d89b416040518163ffffffff1660e01b815260040160006040518083038186803b158015610f6157600080fd5b505afa158015610f75573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610f9d91908101906116d8565b8152602001848381518110610fae57fe5b60200260200101516001600160a01b0316815250828281518110610fce57fe5b60200260200101819052505b600101610ddf565b509250505090565b6000806000610ff76114b3565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316630261bf8b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561105057600080fd5b505afa158015611064573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061108891906115d9565b6001600160a01b03166335ea6a75866040518263ffffffff1660e01b81526004016110b391906118e3565b6101806040518083038186803b1580156110cc57600080fd5b505afa1580156110e0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611104919061177f565b60e0810151610100820151610120909201519097919650945092505050565b606060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316630261bf8b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561118057600080fd5b505afa158015611194573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111b891906115d9565b90506060816001600160a01b031663d1946dbc6040518163ffffffff1660e01b815260040160006040518083038186803b1580156111f557600080fd5b505afa158015611209573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611231919081019061162d565b90506060815167ffffffffffffffff8111801561124d57600080fd5b5060405190808252806020026020018201604052801561128757816020015b611274611531565b81526020019060019003908161126c5790505b50905060005b8251811015610fe25761129e6114b3565b846001600160a01b03166335ea6a758584815181106112b957fe5b60200260200101516040518263ffffffff1660e01b81526004016112dd91906118e3565b6101806040518083038186803b1580156112f657600080fd5b505afa15801561130a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061132e919061177f565b905060405180604001604052808260e001516001600160a01b03166395d89b416040518163ffffffff1660e01b815260040160006040518083038186803b15801561137857600080fd5b505afa15801561138c573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526113b491908101906116d8565b81526020018260e001516001600160a01b03168152508383815181106113d657fe5b60209081029190910101525060010161128d565b60006080821060405180604001604052806002815260200161373760f01b815250906114325760405162461bcd60e51b81526004016114299190611996565b60405180910390fd5b5050815160016002830281019190911c1615155b92915050565b5161ffff80821692601083901c821692602081901c831692603082901c60ff169260409290921c1690565b51670100000000000000811615159167020000000000000082161515916704000000000000008116151591670800000000000000909116151590565b6040518061018001604052806114c761151e565b815260006020820181905260408201819052606082018190526080820181905260a0820181905260c0820181905260e082018190526101008201819052610120820181905261014082018190526101609091015290565b6040518060200160405280600081525090565b60408051808201909152606081526000602082015290565b805161144681611ae3565b600060208284031215611565578081fd5b61156f6020611a8c565b9151825250919050565b80516001600160801b038116811461144657600080fd5b805164ffffffffff8116811461144657600080fd5b805160ff8116811461144657600080fd5b6000602082840312156115c7578081fd5b81356115d281611ae3565b9392505050565b6000602082840312156115ea578081fd5b81516115d281611ae3565b60008060408385031215611607578081fd5b823561161281611ae3565b9150602083013561162281611ae3565b809150509250929050565b6000602080838503121561163f578182fd5b825167ffffffffffffffff80821115611656578384fd5b818501915085601f830112611669578384fd5b815181811115611677578485fd5b8381029150611687848301611a8c565b8181528481019084860184860187018a10156116a1578788fd5b8795505b838610156116cb576116b78a82611549565b8352600195909501949186019186016116a5565b5098975050505050505050565b6000602082840312156116e9578081fd5b815167ffffffffffffffff80821115611700578283fd5b818401915084601f830112611713578283fd5b815181811115611721578384fd5b611734601f8201601f1916602001611a8c565b915080825285602082850101111561174a578384fd5b61175b816020840160208601611ab3565b50949350505050565b600060208284031215611775578081fd5b6115d28383611554565b6000610180808385031215611792578182fd5b61179b81611a8c565b90506117a78484611554565b81526117b68460208501611579565b60208201526117c88460408501611579565b60408201526117da8460608501611579565b60608201526117ec8460808501611579565b60808201526117fe8460a08501611579565b60a08201526118108460c08501611590565b60c08201526118228460e08501611549565b60e082015261010061183685828601611549565b9082015261012061184985858301611549565b9082015261014061185c85858301611549565b9082015261016061186f858583016115a5565b908201529392505050565b60006020828403121561188b578081fd5b5051919050565b6000602082840312156118a3578081fd5b815164ffffffffff811681146115d2578182fd5b600081518084526118cf816020860160208601611ab3565b601f01601f19169290920160200192915050565b6001600160a01b0391909116815260200190565b6001600160a01b0393841681529183166020830152909116604082015260600190565b60208082528251828201819052600091906040908185019080840286018301878501865b8381101561198857888303603f1901855281518051878552611962888601826118b7565b918901516001600160a01b0316948901949094529487019492509086019060010161193e565b509098975050505050505050565b6000602082526115d260208301846118b7565b998a5260208a0198909852604089019690965260608801949094526080870192909252151560a0860152151560c0850152151560e0840152151561010083015215156101208201526101400190565b998a5260208a019890985260408901969096526060880194909452608087019290925260a086015260c085015260e084015261010083015264ffffffffff166101208201526101400190565b988952602089019790975260408801959095526060870193909352608086019190915260a085015260c084015264ffffffffff1660e083015215156101008201526101200190565b60405181810167ffffffffffffffff81118282101715611aab57600080fd5b604052919050565b60005b83811015611ace578181015183820152602001611ab6565b83811115611add576000848401525b50505050565b6001600160a01b0381168114611af857600080fd5b5056fea264697066735822122080e78c31bfe1ad1b6a37c37fd3eb922b498b73b483e490acd40e4c6d049d064c64736f6c634300060c0033";
