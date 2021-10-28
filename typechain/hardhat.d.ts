/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "AccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessControl__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "AddressStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AddressStorage__factory>;
    getContractFactory(
      name: "LendingPoolAddressesProvider",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LendingPoolAddressesProvider__factory>;
    getContractFactory(
      name: "LendingPoolParametersProvider",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LendingPoolParametersProvider__factory>;
    getContractFactory(
      name: "UintStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UintStorage__factory>;
    getContractFactory(
      name: "FeeProvider",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FeeProvider__factory>;
    getContractFactory(
      name: "TokenDistributor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TokenDistributor__factory>;
    getContractFactory(
      name: "IChainlinkAggregator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IChainlinkAggregator__factory>;
    getContractFactory(
      name: "IERC20Detailed",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Detailed__factory>;
    getContractFactory(
      name: "IFeeProvider",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IFeeProvider__factory>;
    getContractFactory(
      name: "IKyberNetworkProxyInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IKyberNetworkProxyInterface__factory>;
    getContractFactory(
      name: "ILendingPoolAddressesProvider",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ILendingPoolAddressesProvider__factory>;
    getContractFactory(
      name: "ILendingRateOracle",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ILendingRateOracle__factory>;
    getContractFactory(
      name: "IPriceOracle",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPriceOracle__factory>;
    getContractFactory(
      name: "IPriceOracleGetter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPriceOracleGetter__factory>;
    getContractFactory(
      name: "IReserveInterestRateStrategy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IReserveInterestRateStrategy__factory>;
    getContractFactory(
      name: "DefaultReserveInterestRateStrategy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DefaultReserveInterestRateStrategy__factory>;
    getContractFactory(
      name: "LendingPool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LendingPool__factory>;
    getContractFactory(
      name: "LendingPoolConfigurator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LendingPoolConfigurator__factory>;
    getContractFactory(
      name: "LendingPoolCore",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LendingPoolCore__factory>;
    getContractFactory(
      name: "LendingPoolDataProvider",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LendingPoolDataProvider__factory>;
    getContractFactory(
      name: "LendingPoolLiquidationManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LendingPoolLiquidationManager__factory>;
    getContractFactory(
      name: "AdminUpgradeabilityProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AdminUpgradeabilityProxy__factory>;
    getContractFactory(
      name: "BaseAdminUpgradeabilityProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseAdminUpgradeabilityProxy__factory>;
    getContractFactory(
      name: "BaseUpgradeabilityProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseUpgradeabilityProxy__factory>;
    getContractFactory(
      name: "InitializableAdminUpgradeabilityProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.InitializableAdminUpgradeabilityProxy__factory>;
    getContractFactory(
      name: "InitializableUpgradeabilityProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.InitializableUpgradeabilityProxy__factory>;
    getContractFactory(
      name: "Proxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Proxy__factory>;
    getContractFactory(
      name: "UpgradeabilityProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UpgradeabilityProxy__factory>;
    getContractFactory(
      name: "ChainlinkProxyPriceProvider",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ChainlinkProxyPriceProvider__factory>;
    getContractFactory(
      name: "IERC20DetailedBytes",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20DetailedBytes__factory>;
    getContractFactory(
      name: "WalletBalanceProvider",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.WalletBalanceProvider__factory>;
    getContractFactory(
      name: "MockAggregatorBase",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockAggregatorBase__factory>;
    getContractFactory(
      name: "MockAggregatorBAT",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockAggregatorBAT__factory>;
    getContractFactory(
      name: "MockAggregatorDAI",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockAggregatorDAI__factory>;
    getContractFactory(
      name: "MockAggregatorKNC",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockAggregatorKNC__factory>;
    getContractFactory(
      name: "MockAggregatorLEND",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockAggregatorLEND__factory>;
    getContractFactory(
      name: "MockAggregatorLINK",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockAggregatorLINK__factory>;
    getContractFactory(
      name: "MockAggregatorMANA",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockAggregatorMANA__factory>;
    getContractFactory(
      name: "MockAggregatorMKR",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockAggregatorMKR__factory>;
    getContractFactory(
      name: "MockAggregatorREP",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockAggregatorREP__factory>;
    getContractFactory(
      name: "MockAggregatorSUSD",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockAggregatorSUSD__factory>;
    getContractFactory(
      name: "MockAggregatorTUSD",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockAggregatorTUSD__factory>;
    getContractFactory(
      name: "MockAggregatorUSDC",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockAggregatorUSDC__factory>;
    getContractFactory(
      name: "MockAggregatorUSDT",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockAggregatorUSDT__factory>;
    getContractFactory(
      name: "MockAggregatorWBTC",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockAggregatorWBTC__factory>;
    getContractFactory(
      name: "MockAggregatorZRX",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockAggregatorZRX__factory>;
    getContractFactory(
      name: "GenericOracleI",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GenericOracleI__factory>;
    getContractFactory(
      name: "LendingRateOracle",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LendingRateOracle__factory>;
    getContractFactory(
      name: "PriceOracle",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PriceOracle__factory>;
    getContractFactory(
      name: "MintableERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MintableERC20__factory>;
    getContractFactory(
      name: "MockBAT",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockBAT__factory>;
    getContractFactory(
      name: "MockDAI",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockDAI__factory>;
    getContractFactory(
      name: "MockKNC",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockKNC__factory>;
    getContractFactory(
      name: "MockLEND",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockLEND__factory>;
    getContractFactory(
      name: "MockLINK",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockLINK__factory>;
    getContractFactory(
      name: "MockMANA",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockMANA__factory>;
    getContractFactory(
      name: "MockMKR",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockMKR__factory>;
    getContractFactory(
      name: "MockREP",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockREP__factory>;
    getContractFactory(
      name: "MockSUSD",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockSUSD__factory>;
    getContractFactory(
      name: "MockTUSD",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockTUSD__factory>;
    getContractFactory(
      name: "MockUSDC",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockUSDC__factory>;
    getContractFactory(
      name: "MockUSDT",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockUSDT__factory>;
    getContractFactory(
      name: "MockWBTC",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockWBTC__factory>;
    getContractFactory(
      name: "MockZRX",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockZRX__factory>;
    getContractFactory(
      name: "MockLendingPoolCore",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockLendingPoolCore__factory>;
    getContractFactory(
      name: "TestToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestToken__factory>;
    getContractFactory(
      name: "IncentivizedERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IncentivizedERC20__factory>;
    getContractFactory(
      name: "WvToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.WvToken__factory>;

    getContractAt(
      name: "AccessControl",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AccessControl>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "AddressStorage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AddressStorage>;
    getContractAt(
      name: "LendingPoolAddressesProvider",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LendingPoolAddressesProvider>;
    getContractAt(
      name: "LendingPoolParametersProvider",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LendingPoolParametersProvider>;
    getContractAt(
      name: "UintStorage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UintStorage>;
    getContractAt(
      name: "FeeProvider",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FeeProvider>;
    getContractAt(
      name: "TokenDistributor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TokenDistributor>;
    getContractAt(
      name: "IChainlinkAggregator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IChainlinkAggregator>;
    getContractAt(
      name: "IERC20Detailed",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Detailed>;
    getContractAt(
      name: "IFeeProvider",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IFeeProvider>;
    getContractAt(
      name: "IKyberNetworkProxyInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IKyberNetworkProxyInterface>;
    getContractAt(
      name: "ILendingPoolAddressesProvider",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ILendingPoolAddressesProvider>;
    getContractAt(
      name: "ILendingRateOracle",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ILendingRateOracle>;
    getContractAt(
      name: "IPriceOracle",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPriceOracle>;
    getContractAt(
      name: "IPriceOracleGetter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPriceOracleGetter>;
    getContractAt(
      name: "IReserveInterestRateStrategy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IReserveInterestRateStrategy>;
    getContractAt(
      name: "DefaultReserveInterestRateStrategy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DefaultReserveInterestRateStrategy>;
    getContractAt(
      name: "LendingPool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LendingPool>;
    getContractAt(
      name: "LendingPoolConfigurator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LendingPoolConfigurator>;
    getContractAt(
      name: "LendingPoolCore",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LendingPoolCore>;
    getContractAt(
      name: "LendingPoolDataProvider",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LendingPoolDataProvider>;
    getContractAt(
      name: "LendingPoolLiquidationManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LendingPoolLiquidationManager>;
    getContractAt(
      name: "AdminUpgradeabilityProxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AdminUpgradeabilityProxy>;
    getContractAt(
      name: "BaseAdminUpgradeabilityProxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BaseAdminUpgradeabilityProxy>;
    getContractAt(
      name: "BaseUpgradeabilityProxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BaseUpgradeabilityProxy>;
    getContractAt(
      name: "InitializableAdminUpgradeabilityProxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.InitializableAdminUpgradeabilityProxy>;
    getContractAt(
      name: "InitializableUpgradeabilityProxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.InitializableUpgradeabilityProxy>;
    getContractAt(
      name: "Proxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Proxy>;
    getContractAt(
      name: "UpgradeabilityProxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UpgradeabilityProxy>;
    getContractAt(
      name: "ChainlinkProxyPriceProvider",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ChainlinkProxyPriceProvider>;
    getContractAt(
      name: "IERC20DetailedBytes",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20DetailedBytes>;
    getContractAt(
      name: "WalletBalanceProvider",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.WalletBalanceProvider>;
    getContractAt(
      name: "MockAggregatorBase",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockAggregatorBase>;
    getContractAt(
      name: "MockAggregatorBAT",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockAggregatorBAT>;
    getContractAt(
      name: "MockAggregatorDAI",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockAggregatorDAI>;
    getContractAt(
      name: "MockAggregatorKNC",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockAggregatorKNC>;
    getContractAt(
      name: "MockAggregatorLEND",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockAggregatorLEND>;
    getContractAt(
      name: "MockAggregatorLINK",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockAggregatorLINK>;
    getContractAt(
      name: "MockAggregatorMANA",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockAggregatorMANA>;
    getContractAt(
      name: "MockAggregatorMKR",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockAggregatorMKR>;
    getContractAt(
      name: "MockAggregatorREP",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockAggregatorREP>;
    getContractAt(
      name: "MockAggregatorSUSD",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockAggregatorSUSD>;
    getContractAt(
      name: "MockAggregatorTUSD",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockAggregatorTUSD>;
    getContractAt(
      name: "MockAggregatorUSDC",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockAggregatorUSDC>;
    getContractAt(
      name: "MockAggregatorUSDT",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockAggregatorUSDT>;
    getContractAt(
      name: "MockAggregatorWBTC",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockAggregatorWBTC>;
    getContractAt(
      name: "MockAggregatorZRX",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockAggregatorZRX>;
    getContractAt(
      name: "GenericOracleI",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GenericOracleI>;
    getContractAt(
      name: "LendingRateOracle",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LendingRateOracle>;
    getContractAt(
      name: "PriceOracle",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PriceOracle>;
    getContractAt(
      name: "MintableERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MintableERC20>;
    getContractAt(
      name: "MockBAT",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockBAT>;
    getContractAt(
      name: "MockDAI",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockDAI>;
    getContractAt(
      name: "MockKNC",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockKNC>;
    getContractAt(
      name: "MockLEND",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockLEND>;
    getContractAt(
      name: "MockLINK",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockLINK>;
    getContractAt(
      name: "MockMANA",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockMANA>;
    getContractAt(
      name: "MockMKR",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockMKR>;
    getContractAt(
      name: "MockREP",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockREP>;
    getContractAt(
      name: "MockSUSD",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockSUSD>;
    getContractAt(
      name: "MockTUSD",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockTUSD>;
    getContractAt(
      name: "MockUSDC",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockUSDC>;
    getContractAt(
      name: "MockUSDT",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockUSDT>;
    getContractAt(
      name: "MockWBTC",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockWBTC>;
    getContractAt(
      name: "MockZRX",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockZRX>;
    getContractAt(
      name: "MockLendingPoolCore",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockLendingPoolCore>;
    getContractAt(
      name: "TestToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestToken>;
    getContractAt(
      name: "IncentivizedERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IncentivizedERC20>;
    getContractAt(
      name: "WvToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.WvToken>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
