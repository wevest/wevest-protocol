/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface ILendingPoolInterface extends ethers.utils.Interface {
  functions: {
    "borrow(address,uint256,uint256,uint16,address)": FunctionFragment;
    "deposit(address,uint256,address,uint16)": FunctionFragment;
    "finalizeTransfer(address,address,address,uint256,uint256,uint256)": FunctionFragment;
    "getAddressesProvider()": FunctionFragment;
    "getConfiguration(address)": FunctionFragment;
    "getReserveData(address)": FunctionFragment;
    "getReserveNormalizedIncome(address)": FunctionFragment;
    "getReserveNormalizedVariableDebt(address)": FunctionFragment;
    "getReservesList()": FunctionFragment;
    "getUserAccountData(address)": FunctionFragment;
    "getUserConfiguration(address)": FunctionFragment;
    "initReserve(address,address,address,address,address)": FunctionFragment;
    "liquidationCall(address,address,address,uint256,bool)": FunctionFragment;
    "paused()": FunctionFragment;
    "rebalanceStableBorrowRate(address,address)": FunctionFragment;
    "repay(address,uint256,uint256,address)": FunctionFragment;
    "setConfiguration(address,uint256)": FunctionFragment;
    "setPause(bool)": FunctionFragment;
    "setReserveInterestRateStrategyAddress(address,address)": FunctionFragment;
    "setUserUseReserveAsCollateral(address,bool)": FunctionFragment;
    "swapBorrowRateMode(address,uint256)": FunctionFragment;
    "withdraw(address,uint256,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "borrow",
    values: [string, BigNumberish, BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [string, BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "finalizeTransfer",
    values: [string, string, string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAddressesProvider",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getConfiguration",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getReserveData",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getReserveNormalizedIncome",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getReserveNormalizedVariableDebt",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getReservesList",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getUserAccountData",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserConfiguration",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "initReserve",
    values: [string, string, string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidationCall",
    values: [string, string, string, BigNumberish, boolean]
  ): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "rebalanceStableBorrowRate",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "repay",
    values: [string, BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setConfiguration",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setPause", values: [boolean]): string;
  encodeFunctionData(
    functionFragment: "setReserveInterestRateStrategyAddress",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setUserUseReserveAsCollateral",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "swapBorrowRateMode",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [string, BigNumberish, string]
  ): string;

  decodeFunctionResult(functionFragment: "borrow", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "finalizeTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAddressesProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getConfiguration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReserveData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReserveNormalizedIncome",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReserveNormalizedVariableDebt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReservesList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserAccountData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserConfiguration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initReserve",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "liquidationCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rebalanceStableBorrowRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "repay", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setConfiguration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setPause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setReserveInterestRateStrategyAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setUserUseReserveAsCollateral",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapBorrowRateMode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "Borrow(address,address,address,uint256,uint256,uint256)": EventFragment;
    "Deposit(address,address,address,uint256)": EventFragment;
    "LiquidationCall(address,address,address,uint256,uint256,address,bool)": EventFragment;
    "Paused()": EventFragment;
    "RebalanceStableBorrowRate(address,address)": EventFragment;
    "Repay(address,address,address,uint256)": EventFragment;
    "ReserveDataUpdated(address,uint256,uint256,uint256,uint256,uint256)": EventFragment;
    "ReserveUsedAsCollateralDisabled(address,address)": EventFragment;
    "ReserveUsedAsCollateralEnabled(address,address)": EventFragment;
    "Swap(address,address,uint256)": EventFragment;
    "Unpaused()": EventFragment;
    "Withdraw(address,address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Borrow"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LiquidationCall"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RebalanceStableBorrowRate"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Repay"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReserveDataUpdated"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "ReserveUsedAsCollateralDisabled"
  ): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "ReserveUsedAsCollateralEnabled"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Swap"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}

export type BorrowEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber, BigNumber] & {
    reserve: string;
    user: string;
    onBehalfOf: string;
    amount: BigNumber;
    borrowRateMode: BigNumber;
    borrowRate: BigNumber;
  }
>;

export type DepositEvent = TypedEvent<
  [string, string, string, BigNumber] & {
    reserve: string;
    user: string;
    onBehalfOf: string;
    amount: BigNumber;
  }
>;

export type LiquidationCallEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber, string, boolean] & {
    collateralAsset: string;
    debtAsset: string;
    user: string;
    debtToCover: BigNumber;
    liquidatedCollateralAmount: BigNumber;
    liquidator: string;
    receiveAToken: boolean;
  }
>;

export type PausedEvent = TypedEvent<[] & {}>;

export type RebalanceStableBorrowRateEvent = TypedEvent<
  [string, string] & { reserve: string; user: string }
>;

export type RepayEvent = TypedEvent<
  [string, string, string, BigNumber] & {
    reserve: string;
    user: string;
    repayer: string;
    amount: BigNumber;
  }
>;

export type ReserveDataUpdatedEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
    reserve: string;
    liquidityRate: BigNumber;
    stableBorrowRate: BigNumber;
    variableBorrowRate: BigNumber;
    liquidityIndex: BigNumber;
    variableBorrowIndex: BigNumber;
  }
>;

export type ReserveUsedAsCollateralDisabledEvent = TypedEvent<
  [string, string] & { reserve: string; user: string }
>;

export type ReserveUsedAsCollateralEnabledEvent = TypedEvent<
  [string, string] & { reserve: string; user: string }
>;

export type SwapEvent = TypedEvent<
  [string, string, BigNumber] & {
    reserve: string;
    user: string;
    rateMode: BigNumber;
  }
>;

export type UnpausedEvent = TypedEvent<[] & {}>;

export type WithdrawEvent = TypedEvent<
  [string, string, string, BigNumber] & {
    reserve: string;
    user: string;
    to: string;
    amount: BigNumber;
  }
>;

export class ILendingPool extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ILendingPoolInterface;

  functions: {
    borrow(
      asset: string,
      amount: BigNumberish,
      interestRateMode: BigNumberish,
      referralCode: BigNumberish,
      onBehalfOf: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deposit(
      asset: string,
      amount: BigNumberish,
      onBehalfOf: string,
      referralCode: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    finalizeTransfer(
      asset: string,
      from: string,
      to: string,
      amount: BigNumberish,
      balanceFromAfter: BigNumberish,
      balanceToBefore: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getAddressesProvider(overrides?: CallOverrides): Promise<[string]>;

    getConfiguration(
      asset: string,
      overrides?: CallOverrides
    ): Promise<[[BigNumber] & { data: BigNumber }]>;

    getReserveData(
      asset: string,
      overrides?: CallOverrides
    ): Promise<
      [
        [
          [BigNumber] & { data: BigNumber },
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          number,
          string,
          string,
          string,
          string,
          number
        ] & {
          configuration: [BigNumber] & { data: BigNumber };
          liquidityIndex: BigNumber;
          variableBorrowIndex: BigNumber;
          currentLiquidityRate: BigNumber;
          currentVariableBorrowRate: BigNumber;
          currentStableBorrowRate: BigNumber;
          lastUpdateTimestamp: number;
          aTokenAddress: string;
          stableDebtTokenAddress: string;
          variableDebtTokenAddress: string;
          interestRateStrategyAddress: string;
          id: number;
        }
      ]
    >;

    getReserveNormalizedIncome(
      asset: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getReserveNormalizedVariableDebt(
      asset: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getReservesList(overrides?: CallOverrides): Promise<[string[]]>;

    getUserAccountData(
      user: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        totalCollateralETH: BigNumber;
        totalDebtETH: BigNumber;
        availableBorrowsETH: BigNumber;
        currentLiquidationThreshold: BigNumber;
        ltv: BigNumber;
        healthFactor: BigNumber;
      }
    >;

    getUserConfiguration(
      user: string,
      overrides?: CallOverrides
    ): Promise<[[BigNumber] & { data: BigNumber }]>;

    initReserve(
      reserve: string,
      aTokenAddress: string,
      stableDebtAddress: string,
      variableDebtAddress: string,
      interestRateStrategyAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    liquidationCall(
      collateralAsset: string,
      debtAsset: string,
      user: string,
      debtToCover: BigNumberish,
      receiveAToken: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    rebalanceStableBorrowRate(
      asset: string,
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    repay(
      asset: string,
      amount: BigNumberish,
      rateMode: BigNumberish,
      onBehalfOf: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setConfiguration(
      reserve: string,
      configuration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPause(
      val: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setReserveInterestRateStrategyAddress(
      reserve: string,
      rateStrategyAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setUserUseReserveAsCollateral(
      asset: string,
      useAsCollateral: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swapBorrowRateMode(
      asset: string,
      rateMode: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      asset: string,
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  borrow(
    asset: string,
    amount: BigNumberish,
    interestRateMode: BigNumberish,
    referralCode: BigNumberish,
    onBehalfOf: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deposit(
    asset: string,
    amount: BigNumberish,
    onBehalfOf: string,
    referralCode: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  finalizeTransfer(
    asset: string,
    from: string,
    to: string,
    amount: BigNumberish,
    balanceFromAfter: BigNumberish,
    balanceToBefore: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getAddressesProvider(overrides?: CallOverrides): Promise<string>;

  getConfiguration(
    asset: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber] & { data: BigNumber }>;

  getReserveData(
    asset: string,
    overrides?: CallOverrides
  ): Promise<
    [
      [BigNumber] & { data: BigNumber },
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      number,
      string,
      string,
      string,
      string,
      number
    ] & {
      configuration: [BigNumber] & { data: BigNumber };
      liquidityIndex: BigNumber;
      variableBorrowIndex: BigNumber;
      currentLiquidityRate: BigNumber;
      currentVariableBorrowRate: BigNumber;
      currentStableBorrowRate: BigNumber;
      lastUpdateTimestamp: number;
      aTokenAddress: string;
      stableDebtTokenAddress: string;
      variableDebtTokenAddress: string;
      interestRateStrategyAddress: string;
      id: number;
    }
  >;

  getReserveNormalizedIncome(
    asset: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getReserveNormalizedVariableDebt(
    asset: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getReservesList(overrides?: CallOverrides): Promise<string[]>;

  getUserAccountData(
    user: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      totalCollateralETH: BigNumber;
      totalDebtETH: BigNumber;
      availableBorrowsETH: BigNumber;
      currentLiquidationThreshold: BigNumber;
      ltv: BigNumber;
      healthFactor: BigNumber;
    }
  >;

  getUserConfiguration(
    user: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber] & { data: BigNumber }>;

  initReserve(
    reserve: string,
    aTokenAddress: string,
    stableDebtAddress: string,
    variableDebtAddress: string,
    interestRateStrategyAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  liquidationCall(
    collateralAsset: string,
    debtAsset: string,
    user: string,
    debtToCover: BigNumberish,
    receiveAToken: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  rebalanceStableBorrowRate(
    asset: string,
    user: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  repay(
    asset: string,
    amount: BigNumberish,
    rateMode: BigNumberish,
    onBehalfOf: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setConfiguration(
    reserve: string,
    configuration: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPause(
    val: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setReserveInterestRateStrategyAddress(
    reserve: string,
    rateStrategyAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setUserUseReserveAsCollateral(
    asset: string,
    useAsCollateral: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swapBorrowRateMode(
    asset: string,
    rateMode: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    asset: string,
    amount: BigNumberish,
    to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    borrow(
      asset: string,
      amount: BigNumberish,
      interestRateMode: BigNumberish,
      referralCode: BigNumberish,
      onBehalfOf: string,
      overrides?: CallOverrides
    ): Promise<void>;

    deposit(
      asset: string,
      amount: BigNumberish,
      onBehalfOf: string,
      referralCode: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    finalizeTransfer(
      asset: string,
      from: string,
      to: string,
      amount: BigNumberish,
      balanceFromAfter: BigNumberish,
      balanceToBefore: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getAddressesProvider(overrides?: CallOverrides): Promise<string>;

    getConfiguration(
      asset: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { data: BigNumber }>;

    getReserveData(
      asset: string,
      overrides?: CallOverrides
    ): Promise<
      [
        [BigNumber] & { data: BigNumber },
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        string,
        string,
        string,
        string,
        number
      ] & {
        configuration: [BigNumber] & { data: BigNumber };
        liquidityIndex: BigNumber;
        variableBorrowIndex: BigNumber;
        currentLiquidityRate: BigNumber;
        currentVariableBorrowRate: BigNumber;
        currentStableBorrowRate: BigNumber;
        lastUpdateTimestamp: number;
        aTokenAddress: string;
        stableDebtTokenAddress: string;
        variableDebtTokenAddress: string;
        interestRateStrategyAddress: string;
        id: number;
      }
    >;

    getReserveNormalizedIncome(
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReserveNormalizedVariableDebt(
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReservesList(overrides?: CallOverrides): Promise<string[]>;

    getUserAccountData(
      user: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        totalCollateralETH: BigNumber;
        totalDebtETH: BigNumber;
        availableBorrowsETH: BigNumber;
        currentLiquidationThreshold: BigNumber;
        ltv: BigNumber;
        healthFactor: BigNumber;
      }
    >;

    getUserConfiguration(
      user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { data: BigNumber }>;

    initReserve(
      reserve: string,
      aTokenAddress: string,
      stableDebtAddress: string,
      variableDebtAddress: string,
      interestRateStrategyAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    liquidationCall(
      collateralAsset: string,
      debtAsset: string,
      user: string,
      debtToCover: BigNumberish,
      receiveAToken: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    rebalanceStableBorrowRate(
      asset: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<void>;

    repay(
      asset: string,
      amount: BigNumberish,
      rateMode: BigNumberish,
      onBehalfOf: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setConfiguration(
      reserve: string,
      configuration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setPause(val: boolean, overrides?: CallOverrides): Promise<void>;

    setReserveInterestRateStrategyAddress(
      reserve: string,
      rateStrategyAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setUserUseReserveAsCollateral(
      asset: string,
      useAsCollateral: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    swapBorrowRateMode(
      asset: string,
      rateMode: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(
      asset: string,
      amount: BigNumberish,
      to: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "Borrow(address,address,address,uint256,uint256,uint256)"(
      reserve?: string | null,
      user?: null,
      onBehalfOf?: string | null,
      amount?: null,
      borrowRateMode?: null,
      borrowRate?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, BigNumber, BigNumber],
      {
        reserve: string;
        user: string;
        onBehalfOf: string;
        amount: BigNumber;
        borrowRateMode: BigNumber;
        borrowRate: BigNumber;
      }
    >;

    Borrow(
      reserve?: string | null,
      user?: null,
      onBehalfOf?: string | null,
      amount?: null,
      borrowRateMode?: null,
      borrowRate?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, BigNumber, BigNumber],
      {
        reserve: string;
        user: string;
        onBehalfOf: string;
        amount: BigNumber;
        borrowRateMode: BigNumber;
        borrowRate: BigNumber;
      }
    >;

    "Deposit(address,address,address,uint256)"(
      reserve?: string | null,
      user?: null,
      onBehalfOf?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber],
      { reserve: string; user: string; onBehalfOf: string; amount: BigNumber }
    >;

    Deposit(
      reserve?: string | null,
      user?: null,
      onBehalfOf?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber],
      { reserve: string; user: string; onBehalfOf: string; amount: BigNumber }
    >;

    "LiquidationCall(address,address,address,uint256,uint256,address,bool)"(
      collateralAsset?: string | null,
      debtAsset?: string | null,
      user?: string | null,
      debtToCover?: null,
      liquidatedCollateralAmount?: null,
      liquidator?: null,
      receiveAToken?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, BigNumber, string, boolean],
      {
        collateralAsset: string;
        debtAsset: string;
        user: string;
        debtToCover: BigNumber;
        liquidatedCollateralAmount: BigNumber;
        liquidator: string;
        receiveAToken: boolean;
      }
    >;

    LiquidationCall(
      collateralAsset?: string | null,
      debtAsset?: string | null,
      user?: string | null,
      debtToCover?: null,
      liquidatedCollateralAmount?: null,
      liquidator?: null,
      receiveAToken?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, BigNumber, string, boolean],
      {
        collateralAsset: string;
        debtAsset: string;
        user: string;
        debtToCover: BigNumber;
        liquidatedCollateralAmount: BigNumber;
        liquidator: string;
        receiveAToken: boolean;
      }
    >;

    "Paused()"(): TypedEventFilter<[], {}>;

    Paused(): TypedEventFilter<[], {}>;

    "RebalanceStableBorrowRate(address,address)"(
      reserve?: string | null,
      user?: string | null
    ): TypedEventFilter<[string, string], { reserve: string; user: string }>;

    RebalanceStableBorrowRate(
      reserve?: string | null,
      user?: string | null
    ): TypedEventFilter<[string, string], { reserve: string; user: string }>;

    "Repay(address,address,address,uint256)"(
      reserve?: string | null,
      user?: string | null,
      repayer?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber],
      { reserve: string; user: string; repayer: string; amount: BigNumber }
    >;

    Repay(
      reserve?: string | null,
      user?: string | null,
      repayer?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber],
      { reserve: string; user: string; repayer: string; amount: BigNumber }
    >;

    "ReserveDataUpdated(address,uint256,uint256,uint256,uint256,uint256)"(
      reserve?: string | null,
      liquidityRate?: null,
      stableBorrowRate?: null,
      variableBorrowRate?: null,
      liquidityIndex?: null,
      variableBorrowIndex?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber],
      {
        reserve: string;
        liquidityRate: BigNumber;
        stableBorrowRate: BigNumber;
        variableBorrowRate: BigNumber;
        liquidityIndex: BigNumber;
        variableBorrowIndex: BigNumber;
      }
    >;

    ReserveDataUpdated(
      reserve?: string | null,
      liquidityRate?: null,
      stableBorrowRate?: null,
      variableBorrowRate?: null,
      liquidityIndex?: null,
      variableBorrowIndex?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber],
      {
        reserve: string;
        liquidityRate: BigNumber;
        stableBorrowRate: BigNumber;
        variableBorrowRate: BigNumber;
        liquidityIndex: BigNumber;
        variableBorrowIndex: BigNumber;
      }
    >;

    "ReserveUsedAsCollateralDisabled(address,address)"(
      reserve?: string | null,
      user?: string | null
    ): TypedEventFilter<[string, string], { reserve: string; user: string }>;

    ReserveUsedAsCollateralDisabled(
      reserve?: string | null,
      user?: string | null
    ): TypedEventFilter<[string, string], { reserve: string; user: string }>;

    "ReserveUsedAsCollateralEnabled(address,address)"(
      reserve?: string | null,
      user?: string | null
    ): TypedEventFilter<[string, string], { reserve: string; user: string }>;

    ReserveUsedAsCollateralEnabled(
      reserve?: string | null,
      user?: string | null
    ): TypedEventFilter<[string, string], { reserve: string; user: string }>;

    "Swap(address,address,uint256)"(
      reserve?: string | null,
      user?: string | null,
      rateMode?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { reserve: string; user: string; rateMode: BigNumber }
    >;

    Swap(
      reserve?: string | null,
      user?: string | null,
      rateMode?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { reserve: string; user: string; rateMode: BigNumber }
    >;

    "Unpaused()"(): TypedEventFilter<[], {}>;

    Unpaused(): TypedEventFilter<[], {}>;

    "Withdraw(address,address,address,uint256)"(
      reserve?: string | null,
      user?: string | null,
      to?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber],
      { reserve: string; user: string; to: string; amount: BigNumber }
    >;

    Withdraw(
      reserve?: string | null,
      user?: string | null,
      to?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber],
      { reserve: string; user: string; to: string; amount: BigNumber }
    >;
  };

  estimateGas: {
    borrow(
      asset: string,
      amount: BigNumberish,
      interestRateMode: BigNumberish,
      referralCode: BigNumberish,
      onBehalfOf: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deposit(
      asset: string,
      amount: BigNumberish,
      onBehalfOf: string,
      referralCode: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    finalizeTransfer(
      asset: string,
      from: string,
      to: string,
      amount: BigNumberish,
      balanceFromAfter: BigNumberish,
      balanceToBefore: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getAddressesProvider(overrides?: CallOverrides): Promise<BigNumber>;

    getConfiguration(
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReserveData(
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReserveNormalizedIncome(
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReserveNormalizedVariableDebt(
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReservesList(overrides?: CallOverrides): Promise<BigNumber>;

    getUserAccountData(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserConfiguration(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initReserve(
      reserve: string,
      aTokenAddress: string,
      stableDebtAddress: string,
      variableDebtAddress: string,
      interestRateStrategyAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    liquidationCall(
      collateralAsset: string,
      debtAsset: string,
      user: string,
      debtToCover: BigNumberish,
      receiveAToken: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    rebalanceStableBorrowRate(
      asset: string,
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    repay(
      asset: string,
      amount: BigNumberish,
      rateMode: BigNumberish,
      onBehalfOf: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setConfiguration(
      reserve: string,
      configuration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPause(
      val: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setReserveInterestRateStrategyAddress(
      reserve: string,
      rateStrategyAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setUserUseReserveAsCollateral(
      asset: string,
      useAsCollateral: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swapBorrowRateMode(
      asset: string,
      rateMode: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraw(
      asset: string,
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    borrow(
      asset: string,
      amount: BigNumberish,
      interestRateMode: BigNumberish,
      referralCode: BigNumberish,
      onBehalfOf: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deposit(
      asset: string,
      amount: BigNumberish,
      onBehalfOf: string,
      referralCode: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    finalizeTransfer(
      asset: string,
      from: string,
      to: string,
      amount: BigNumberish,
      balanceFromAfter: BigNumberish,
      balanceToBefore: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getAddressesProvider(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getConfiguration(
      asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getReserveData(
      asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getReserveNormalizedIncome(
      asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getReserveNormalizedVariableDebt(
      asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getReservesList(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getUserAccountData(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserConfiguration(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initReserve(
      reserve: string,
      aTokenAddress: string,
      stableDebtAddress: string,
      variableDebtAddress: string,
      interestRateStrategyAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    liquidationCall(
      collateralAsset: string,
      debtAsset: string,
      user: string,
      debtToCover: BigNumberish,
      receiveAToken: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rebalanceStableBorrowRate(
      asset: string,
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    repay(
      asset: string,
      amount: BigNumberish,
      rateMode: BigNumberish,
      onBehalfOf: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setConfiguration(
      reserve: string,
      configuration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPause(
      val: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setReserveInterestRateStrategyAddress(
      reserve: string,
      rateStrategyAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setUserUseReserveAsCollateral(
      asset: string,
      useAsCollateral: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swapBorrowRateMode(
      asset: string,
      rateMode: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      asset: string,
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
