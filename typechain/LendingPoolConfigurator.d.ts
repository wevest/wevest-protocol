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

interface LendingPoolConfiguratorInterface extends ethers.utils.Interface {
  functions: {
    "CONFIGURATOR_REVISION()": FunctionFragment;
    "activateReserve(address)": FunctionFragment;
    "deactivateReserve(address)": FunctionFragment;
    "disableBorrowingOnReserve(address)": FunctionFragment;
    "disableReserveAsCollateral(address)": FunctionFragment;
    "disableReserveStableBorrowRate(address)": FunctionFragment;
    "enableBorrowingOnReserve(address,bool)": FunctionFragment;
    "enableReserveAsCollateral(address,uint256,uint256,uint256)": FunctionFragment;
    "enableReserveStableBorrowRate(address)": FunctionFragment;
    "freezeReserve(address)": FunctionFragment;
    "initReserve(address,uint8,address)": FunctionFragment;
    "initReserveWithData(address,string,string,uint8,address)": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "poolAddressesProvider()": FunctionFragment;
    "refreshLendingPoolCoreConfiguration()": FunctionFragment;
    "removeLastAddedReserve(address)": FunctionFragment;
    "setReserveBaseLTVasCollateral(address,uint256)": FunctionFragment;
    "setReserveDecimals(address,uint256)": FunctionFragment;
    "setReserveInterestRateStrategyAddress(address,address)": FunctionFragment;
    "setReserveLiquidationBonus(address,uint256)": FunctionFragment;
    "setReserveLiquidationThreshold(address,uint256)": FunctionFragment;
    "unfreezeReserve(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "CONFIGURATOR_REVISION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "activateReserve",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "deactivateReserve",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "disableBorrowingOnReserve",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "disableReserveAsCollateral",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "disableReserveStableBorrowRate",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "enableBorrowingOnReserve",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "enableReserveAsCollateral",
    values: [string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "enableReserveStableBorrowRate",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "freezeReserve",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "initReserve",
    values: [string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "initReserveWithData",
    values: [string, string, string, BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "initialize", values: [string]): string;
  encodeFunctionData(
    functionFragment: "poolAddressesProvider",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "refreshLendingPoolCoreConfiguration",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "removeLastAddedReserve",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setReserveBaseLTVasCollateral",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setReserveDecimals",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setReserveInterestRateStrategyAddress",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setReserveLiquidationBonus",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setReserveLiquidationThreshold",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "unfreezeReserve",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "CONFIGURATOR_REVISION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "activateReserve",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deactivateReserve",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "disableBorrowingOnReserve",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "disableReserveAsCollateral",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "disableReserveStableBorrowRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "enableBorrowingOnReserve",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "enableReserveAsCollateral",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "enableReserveStableBorrowRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "freezeReserve",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initReserve",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initReserveWithData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "poolAddressesProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "refreshLendingPoolCoreConfiguration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeLastAddedReserve",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setReserveBaseLTVasCollateral",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setReserveDecimals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setReserveInterestRateStrategyAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setReserveLiquidationBonus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setReserveLiquidationThreshold",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unfreezeReserve",
    data: BytesLike
  ): Result;

  events: {
    "BorrowingDisabledOnReserve(address)": EventFragment;
    "BorrowingEnabledOnReserve(address,bool)": EventFragment;
    "ReserveActivated(address)": EventFragment;
    "ReserveBaseLtvChanged(address,uint256)": EventFragment;
    "ReserveDeactivated(address)": EventFragment;
    "ReserveDecimalsChanged(address,uint256)": EventFragment;
    "ReserveDisabledAsCollateral(address)": EventFragment;
    "ReserveEnabledAsCollateral(address,uint256,uint256,uint256)": EventFragment;
    "ReserveFreezed(address)": EventFragment;
    "ReserveInitialized(address,address,address)": EventFragment;
    "ReserveInterestRateStrategyChanged(address,address)": EventFragment;
    "ReserveLiquidationBonusChanged(address,uint256)": EventFragment;
    "ReserveLiquidationThresholdChanged(address,uint256)": EventFragment;
    "ReserveRemoved(address)": EventFragment;
    "ReserveUnfreezed(address)": EventFragment;
    "StableRateDisabledOnReserve(address)": EventFragment;
    "StableRateEnabledOnReserve(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BorrowingDisabledOnReserve"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BorrowingEnabledOnReserve"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReserveActivated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReserveBaseLtvChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReserveDeactivated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReserveDecimalsChanged"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "ReserveDisabledAsCollateral"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReserveEnabledAsCollateral"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReserveFreezed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReserveInitialized"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "ReserveInterestRateStrategyChanged"
  ): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "ReserveLiquidationBonusChanged"
  ): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "ReserveLiquidationThresholdChanged"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReserveRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReserveUnfreezed"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "StableRateDisabledOnReserve"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StableRateEnabledOnReserve"): EventFragment;
}

export type BorrowingDisabledOnReserveEvent = TypedEvent<
  [string] & { _reserve: string }
>;

export type BorrowingEnabledOnReserveEvent = TypedEvent<
  [string, boolean] & { _reserve: string; _stableRateEnabled: boolean }
>;

export type ReserveActivatedEvent = TypedEvent<[string] & { _reserve: string }>;

export type ReserveBaseLtvChangedEvent = TypedEvent<
  [string, BigNumber] & { _reserve: string; _ltv: BigNumber }
>;

export type ReserveDeactivatedEvent = TypedEvent<
  [string] & { _reserve: string }
>;

export type ReserveDecimalsChangedEvent = TypedEvent<
  [string, BigNumber] & { _reserve: string; _decimals: BigNumber }
>;

export type ReserveDisabledAsCollateralEvent = TypedEvent<
  [string] & { _reserve: string }
>;

export type ReserveEnabledAsCollateralEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber] & {
    _reserve: string;
    _ltv: BigNumber;
    _liquidationThreshold: BigNumber;
    _liquidationBonus: BigNumber;
  }
>;

export type ReserveFreezedEvent = TypedEvent<[string] & { _reserve: string }>;

export type ReserveInitializedEvent = TypedEvent<
  [string, string, string] & {
    _reserve: string;
    _wvToken: string;
    _interestRateStrategyAddress: string;
  }
>;

export type ReserveInterestRateStrategyChangedEvent = TypedEvent<
  [string, string] & { _reserve: string; _strategy: string }
>;

export type ReserveLiquidationBonusChangedEvent = TypedEvent<
  [string, BigNumber] & { _reserve: string; _bonus: BigNumber }
>;

export type ReserveLiquidationThresholdChangedEvent = TypedEvent<
  [string, BigNumber] & { _reserve: string; _threshold: BigNumber }
>;

export type ReserveRemovedEvent = TypedEvent<[string] & { _reserve: string }>;

export type ReserveUnfreezedEvent = TypedEvent<[string] & { _reserve: string }>;

export type StableRateDisabledOnReserveEvent = TypedEvent<
  [string] & { _reserve: string }
>;

export type StableRateEnabledOnReserveEvent = TypedEvent<
  [string] & { _reserve: string }
>;

export class LendingPoolConfigurator extends BaseContract {
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

  interface: LendingPoolConfiguratorInterface;

  functions: {
    CONFIGURATOR_REVISION(overrides?: CallOverrides): Promise<[BigNumber]>;

    activateReserve(
      _reserve: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deactivateReserve(
      _reserve: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    disableBorrowingOnReserve(
      _reserve: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    disableReserveAsCollateral(
      _reserve: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    disableReserveStableBorrowRate(
      _reserve: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    enableBorrowingOnReserve(
      _reserve: string,
      _stableBorrowRateEnabled: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    enableReserveAsCollateral(
      _reserve: string,
      _baseLTVasCollateral: BigNumberish,
      _liquidationThreshold: BigNumberish,
      _liquidationBonus: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    enableReserveStableBorrowRate(
      _reserve: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    freezeReserve(
      _reserve: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initReserve(
      _reserve: string,
      _underlyingAssetDecimals: BigNumberish,
      _interestRateStrategyAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initReserveWithData(
      _reserve: string,
      _wvTokenName: string,
      _wvTokenSymbol: string,
      _underlyingAssetDecimals: BigNumberish,
      _interestRateStrategyAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initialize(
      _poolAddressesProvider: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    poolAddressesProvider(overrides?: CallOverrides): Promise<[string]>;

    refreshLendingPoolCoreConfiguration(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeLastAddedReserve(
      _reserveToRemove: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setReserveBaseLTVasCollateral(
      _reserve: string,
      _ltv: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setReserveDecimals(
      _reserve: string,
      _decimals: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setReserveInterestRateStrategyAddress(
      _reserve: string,
      _rateStrategyAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setReserveLiquidationBonus(
      _reserve: string,
      _bonus: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setReserveLiquidationThreshold(
      _reserve: string,
      _threshold: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unfreezeReserve(
      _reserve: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  CONFIGURATOR_REVISION(overrides?: CallOverrides): Promise<BigNumber>;

  activateReserve(
    _reserve: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deactivateReserve(
    _reserve: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  disableBorrowingOnReserve(
    _reserve: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  disableReserveAsCollateral(
    _reserve: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  disableReserveStableBorrowRate(
    _reserve: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  enableBorrowingOnReserve(
    _reserve: string,
    _stableBorrowRateEnabled: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  enableReserveAsCollateral(
    _reserve: string,
    _baseLTVasCollateral: BigNumberish,
    _liquidationThreshold: BigNumberish,
    _liquidationBonus: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  enableReserveStableBorrowRate(
    _reserve: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  freezeReserve(
    _reserve: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initReserve(
    _reserve: string,
    _underlyingAssetDecimals: BigNumberish,
    _interestRateStrategyAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initReserveWithData(
    _reserve: string,
    _wvTokenName: string,
    _wvTokenSymbol: string,
    _underlyingAssetDecimals: BigNumberish,
    _interestRateStrategyAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initialize(
    _poolAddressesProvider: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  poolAddressesProvider(overrides?: CallOverrides): Promise<string>;

  refreshLendingPoolCoreConfiguration(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeLastAddedReserve(
    _reserveToRemove: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setReserveBaseLTVasCollateral(
    _reserve: string,
    _ltv: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setReserveDecimals(
    _reserve: string,
    _decimals: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setReserveInterestRateStrategyAddress(
    _reserve: string,
    _rateStrategyAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setReserveLiquidationBonus(
    _reserve: string,
    _bonus: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setReserveLiquidationThreshold(
    _reserve: string,
    _threshold: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unfreezeReserve(
    _reserve: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    CONFIGURATOR_REVISION(overrides?: CallOverrides): Promise<BigNumber>;

    activateReserve(_reserve: string, overrides?: CallOverrides): Promise<void>;

    deactivateReserve(
      _reserve: string,
      overrides?: CallOverrides
    ): Promise<void>;

    disableBorrowingOnReserve(
      _reserve: string,
      overrides?: CallOverrides
    ): Promise<void>;

    disableReserveAsCollateral(
      _reserve: string,
      overrides?: CallOverrides
    ): Promise<void>;

    disableReserveStableBorrowRate(
      _reserve: string,
      overrides?: CallOverrides
    ): Promise<void>;

    enableBorrowingOnReserve(
      _reserve: string,
      _stableBorrowRateEnabled: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    enableReserveAsCollateral(
      _reserve: string,
      _baseLTVasCollateral: BigNumberish,
      _liquidationThreshold: BigNumberish,
      _liquidationBonus: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    enableReserveStableBorrowRate(
      _reserve: string,
      overrides?: CallOverrides
    ): Promise<void>;

    freezeReserve(_reserve: string, overrides?: CallOverrides): Promise<void>;

    initReserve(
      _reserve: string,
      _underlyingAssetDecimals: BigNumberish,
      _interestRateStrategyAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    initReserveWithData(
      _reserve: string,
      _wvTokenName: string,
      _wvTokenSymbol: string,
      _underlyingAssetDecimals: BigNumberish,
      _interestRateStrategyAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    initialize(
      _poolAddressesProvider: string,
      overrides?: CallOverrides
    ): Promise<void>;

    poolAddressesProvider(overrides?: CallOverrides): Promise<string>;

    refreshLendingPoolCoreConfiguration(
      overrides?: CallOverrides
    ): Promise<void>;

    removeLastAddedReserve(
      _reserveToRemove: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setReserveBaseLTVasCollateral(
      _reserve: string,
      _ltv: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setReserveDecimals(
      _reserve: string,
      _decimals: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setReserveInterestRateStrategyAddress(
      _reserve: string,
      _rateStrategyAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setReserveLiquidationBonus(
      _reserve: string,
      _bonus: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setReserveLiquidationThreshold(
      _reserve: string,
      _threshold: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    unfreezeReserve(_reserve: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "BorrowingDisabledOnReserve(address)"(
      _reserve?: string | null
    ): TypedEventFilter<[string], { _reserve: string }>;

    BorrowingDisabledOnReserve(
      _reserve?: string | null
    ): TypedEventFilter<[string], { _reserve: string }>;

    "BorrowingEnabledOnReserve(address,bool)"(
      _reserve?: null,
      _stableRateEnabled?: null
    ): TypedEventFilter<
      [string, boolean],
      { _reserve: string; _stableRateEnabled: boolean }
    >;

    BorrowingEnabledOnReserve(
      _reserve?: null,
      _stableRateEnabled?: null
    ): TypedEventFilter<
      [string, boolean],
      { _reserve: string; _stableRateEnabled: boolean }
    >;

    "ReserveActivated(address)"(
      _reserve?: string | null
    ): TypedEventFilter<[string], { _reserve: string }>;

    ReserveActivated(
      _reserve?: string | null
    ): TypedEventFilter<[string], { _reserve: string }>;

    "ReserveBaseLtvChanged(address,uint256)"(
      _reserve?: null,
      _ltv?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { _reserve: string; _ltv: BigNumber }
    >;

    ReserveBaseLtvChanged(
      _reserve?: null,
      _ltv?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { _reserve: string; _ltv: BigNumber }
    >;

    "ReserveDeactivated(address)"(
      _reserve?: string | null
    ): TypedEventFilter<[string], { _reserve: string }>;

    ReserveDeactivated(
      _reserve?: string | null
    ): TypedEventFilter<[string], { _reserve: string }>;

    "ReserveDecimalsChanged(address,uint256)"(
      _reserve?: null,
      _decimals?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { _reserve: string; _decimals: BigNumber }
    >;

    ReserveDecimalsChanged(
      _reserve?: null,
      _decimals?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { _reserve: string; _decimals: BigNumber }
    >;

    "ReserveDisabledAsCollateral(address)"(
      _reserve?: string | null
    ): TypedEventFilter<[string], { _reserve: string }>;

    ReserveDisabledAsCollateral(
      _reserve?: string | null
    ): TypedEventFilter<[string], { _reserve: string }>;

    "ReserveEnabledAsCollateral(address,uint256,uint256,uint256)"(
      _reserve?: string | null,
      _ltv?: null,
      _liquidationThreshold?: null,
      _liquidationBonus?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, BigNumber],
      {
        _reserve: string;
        _ltv: BigNumber;
        _liquidationThreshold: BigNumber;
        _liquidationBonus: BigNumber;
      }
    >;

    ReserveEnabledAsCollateral(
      _reserve?: string | null,
      _ltv?: null,
      _liquidationThreshold?: null,
      _liquidationBonus?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, BigNumber],
      {
        _reserve: string;
        _ltv: BigNumber;
        _liquidationThreshold: BigNumber;
        _liquidationBonus: BigNumber;
      }
    >;

    "ReserveFreezed(address)"(
      _reserve?: string | null
    ): TypedEventFilter<[string], { _reserve: string }>;

    ReserveFreezed(
      _reserve?: string | null
    ): TypedEventFilter<[string], { _reserve: string }>;

    "ReserveInitialized(address,address,address)"(
      _reserve?: string | null,
      _wvToken?: string | null,
      _interestRateStrategyAddress?: null
    ): TypedEventFilter<
      [string, string, string],
      {
        _reserve: string;
        _wvToken: string;
        _interestRateStrategyAddress: string;
      }
    >;

    ReserveInitialized(
      _reserve?: string | null,
      _wvToken?: string | null,
      _interestRateStrategyAddress?: null
    ): TypedEventFilter<
      [string, string, string],
      {
        _reserve: string;
        _wvToken: string;
        _interestRateStrategyAddress: string;
      }
    >;

    "ReserveInterestRateStrategyChanged(address,address)"(
      _reserve?: null,
      _strategy?: null
    ): TypedEventFilter<
      [string, string],
      { _reserve: string; _strategy: string }
    >;

    ReserveInterestRateStrategyChanged(
      _reserve?: null,
      _strategy?: null
    ): TypedEventFilter<
      [string, string],
      { _reserve: string; _strategy: string }
    >;

    "ReserveLiquidationBonusChanged(address,uint256)"(
      _reserve?: null,
      _bonus?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { _reserve: string; _bonus: BigNumber }
    >;

    ReserveLiquidationBonusChanged(
      _reserve?: null,
      _bonus?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { _reserve: string; _bonus: BigNumber }
    >;

    "ReserveLiquidationThresholdChanged(address,uint256)"(
      _reserve?: null,
      _threshold?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { _reserve: string; _threshold: BigNumber }
    >;

    ReserveLiquidationThresholdChanged(
      _reserve?: null,
      _threshold?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { _reserve: string; _threshold: BigNumber }
    >;

    "ReserveRemoved(address)"(
      _reserve?: string | null
    ): TypedEventFilter<[string], { _reserve: string }>;

    ReserveRemoved(
      _reserve?: string | null
    ): TypedEventFilter<[string], { _reserve: string }>;

    "ReserveUnfreezed(address)"(
      _reserve?: string | null
    ): TypedEventFilter<[string], { _reserve: string }>;

    ReserveUnfreezed(
      _reserve?: string | null
    ): TypedEventFilter<[string], { _reserve: string }>;

    "StableRateDisabledOnReserve(address)"(
      _reserve?: string | null
    ): TypedEventFilter<[string], { _reserve: string }>;

    StableRateDisabledOnReserve(
      _reserve?: string | null
    ): TypedEventFilter<[string], { _reserve: string }>;

    "StableRateEnabledOnReserve(address)"(
      _reserve?: string | null
    ): TypedEventFilter<[string], { _reserve: string }>;

    StableRateEnabledOnReserve(
      _reserve?: string | null
    ): TypedEventFilter<[string], { _reserve: string }>;
  };

  estimateGas: {
    CONFIGURATOR_REVISION(overrides?: CallOverrides): Promise<BigNumber>;

    activateReserve(
      _reserve: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deactivateReserve(
      _reserve: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    disableBorrowingOnReserve(
      _reserve: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    disableReserveAsCollateral(
      _reserve: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    disableReserveStableBorrowRate(
      _reserve: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    enableBorrowingOnReserve(
      _reserve: string,
      _stableBorrowRateEnabled: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    enableReserveAsCollateral(
      _reserve: string,
      _baseLTVasCollateral: BigNumberish,
      _liquidationThreshold: BigNumberish,
      _liquidationBonus: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    enableReserveStableBorrowRate(
      _reserve: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    freezeReserve(
      _reserve: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initReserve(
      _reserve: string,
      _underlyingAssetDecimals: BigNumberish,
      _interestRateStrategyAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initReserveWithData(
      _reserve: string,
      _wvTokenName: string,
      _wvTokenSymbol: string,
      _underlyingAssetDecimals: BigNumberish,
      _interestRateStrategyAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initialize(
      _poolAddressesProvider: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    poolAddressesProvider(overrides?: CallOverrides): Promise<BigNumber>;

    refreshLendingPoolCoreConfiguration(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeLastAddedReserve(
      _reserveToRemove: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setReserveBaseLTVasCollateral(
      _reserve: string,
      _ltv: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setReserveDecimals(
      _reserve: string,
      _decimals: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setReserveInterestRateStrategyAddress(
      _reserve: string,
      _rateStrategyAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setReserveLiquidationBonus(
      _reserve: string,
      _bonus: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setReserveLiquidationThreshold(
      _reserve: string,
      _threshold: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unfreezeReserve(
      _reserve: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    CONFIGURATOR_REVISION(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    activateReserve(
      _reserve: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deactivateReserve(
      _reserve: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    disableBorrowingOnReserve(
      _reserve: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    disableReserveAsCollateral(
      _reserve: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    disableReserveStableBorrowRate(
      _reserve: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    enableBorrowingOnReserve(
      _reserve: string,
      _stableBorrowRateEnabled: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    enableReserveAsCollateral(
      _reserve: string,
      _baseLTVasCollateral: BigNumberish,
      _liquidationThreshold: BigNumberish,
      _liquidationBonus: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    enableReserveStableBorrowRate(
      _reserve: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    freezeReserve(
      _reserve: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initReserve(
      _reserve: string,
      _underlyingAssetDecimals: BigNumberish,
      _interestRateStrategyAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initReserveWithData(
      _reserve: string,
      _wvTokenName: string,
      _wvTokenSymbol: string,
      _underlyingAssetDecimals: BigNumberish,
      _interestRateStrategyAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      _poolAddressesProvider: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    poolAddressesProvider(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    refreshLendingPoolCoreConfiguration(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeLastAddedReserve(
      _reserveToRemove: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setReserveBaseLTVasCollateral(
      _reserve: string,
      _ltv: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setReserveDecimals(
      _reserve: string,
      _decimals: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setReserveInterestRateStrategyAddress(
      _reserve: string,
      _rateStrategyAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setReserveLiquidationBonus(
      _reserve: string,
      _bonus: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setReserveLiquidationThreshold(
      _reserve: string,
      _threshold: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unfreezeReserve(
      _reserve: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
