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

interface WvTokenInterface extends ethers.utils.Interface {
  functions: {
    "DEBT_TOKEN_REVISION()": FunctionFragment;
    "POOL()": FunctionFragment;
    "UNDERLYING_ASSET_ADDRESS()": FunctionFragment;
    "allowance(address,address)": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "approveDelegation(address,uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "borrowAllowance(address,address)": FunctionFragment;
    "burn(address,uint256)": FunctionFragment;
    "decimals()": FunctionFragment;
    "decreaseAllowance(address,uint256)": FunctionFragment;
    "getAverageStableRate()": FunctionFragment;
    "getIncentivesController()": FunctionFragment;
    "getSupplyData()": FunctionFragment;
    "getTotalSupplyAndAvgRate()": FunctionFragment;
    "getTotalSupplyLastUpdated()": FunctionFragment;
    "getUserLastUpdated(address)": FunctionFragment;
    "getUserStableRate(address)": FunctionFragment;
    "increaseAllowance(address,uint256)": FunctionFragment;
    "initialize(address,address,address,uint8,string,string,bytes)": FunctionFragment;
    "mint(address,address,uint256,uint256)": FunctionFragment;
    "name()": FunctionFragment;
    "principalBalanceOf(address)": FunctionFragment;
    "symbol()": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transfer(address,uint256)": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "DEBT_TOKEN_REVISION",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "POOL", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "UNDERLYING_ASSET_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "allowance",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "approveDelegation",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "borrowAllowance",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "burn",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "decreaseAllowance",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAverageStableRate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getIncentivesController",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSupplyData",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalSupplyAndAvgRate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalSupplyLastUpdated",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getUserLastUpdated",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserStableRate",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseAllowance",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string, string, BigNumberish, string, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "principalBalanceOf",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "DEBT_TOKEN_REVISION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "POOL", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "UNDERLYING_ASSET_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "approveDelegation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "borrowAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "decreaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAverageStableRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getIncentivesController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSupplyData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalSupplyAndAvgRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalSupplyLastUpdated",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserLastUpdated",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserStableRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "principalBalanceOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "BorrowAllowanceDelegated(address,address,address,uint256)": EventFragment;
    "Burn(address,uint256,uint256,uint256,uint256,uint256)": EventFragment;
    "Initialized(address,address,address,uint8,string,string,bytes)": EventFragment;
    "Mint(address,address,uint256,uint256,uint256,uint256,uint256,uint256)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BorrowAllowanceDelegated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Burn"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Mint"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export type ApprovalEvent = TypedEvent<
  [string, string, BigNumber] & {
    owner: string;
    spender: string;
    value: BigNumber;
  }
>;

export type BorrowAllowanceDelegatedEvent = TypedEvent<
  [string, string, string, BigNumber] & {
    fromUser: string;
    toUser: string;
    asset: string;
    amount: BigNumber;
  }
>;

export type BurnEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
    user: string;
    amount: BigNumber;
    currentBalance: BigNumber;
    balanceIncrease: BigNumber;
    avgStableRate: BigNumber;
    newTotalSupply: BigNumber;
  }
>;

export type InitializedEvent = TypedEvent<
  [string, string, string, number, string, string, string] & {
    underlyingAsset: string;
    pool: string;
    incentivesController: string;
    debtTokenDecimals: number;
    debtTokenName: string;
    debtTokenSymbol: string;
    params: string;
  }
>;

export type MintEvent = TypedEvent<
  [
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    user: string;
    onBehalfOf: string;
    amount: BigNumber;
    currentBalance: BigNumber;
    balanceIncrease: BigNumber;
    newRate: BigNumber;
    avgStableRate: BigNumber;
    newTotalSupply: BigNumber;
  }
>;

export type TransferEvent = TypedEvent<
  [string, string, BigNumber] & { from: string; to: string; value: BigNumber }
>;

export class WvToken extends BaseContract {
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

  interface: WvTokenInterface;

  functions: {
    DEBT_TOKEN_REVISION(overrides?: CallOverrides): Promise<[BigNumber]>;

    POOL(overrides?: CallOverrides): Promise<[string]>;

    UNDERLYING_ASSET_ADDRESS(overrides?: CallOverrides): Promise<[string]>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    approveDelegation(
      delegatee: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    borrowAllowance(
      fromUser: string,
      toUser: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    burn(
      user: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getAverageStableRate(overrides?: CallOverrides): Promise<[BigNumber]>;

    getIncentivesController(overrides?: CallOverrides): Promise<[string]>;

    getSupplyData(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber, number]>;

    getTotalSupplyAndAvgRate(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    getTotalSupplyLastUpdated(overrides?: CallOverrides): Promise<[number]>;

    getUserLastUpdated(
      user: string,
      overrides?: CallOverrides
    ): Promise<[number]>;

    getUserStableRate(
      user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initialize(
      pool: string,
      underlyingAsset: string,
      incentivesController: string,
      debtTokenDecimals: BigNumberish,
      debtTokenName: string,
      debtTokenSymbol: string,
      params: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    mint(
      user: string,
      onBehalfOf: string,
      amount: BigNumberish,
      rate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    name(overrides?: CallOverrides): Promise<[string]>;

    principalBalanceOf(
      user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  DEBT_TOKEN_REVISION(overrides?: CallOverrides): Promise<BigNumber>;

  POOL(overrides?: CallOverrides): Promise<string>;

  UNDERLYING_ASSET_ADDRESS(overrides?: CallOverrides): Promise<string>;

  allowance(
    owner: string,
    spender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  approve(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  approveDelegation(
    delegatee: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  borrowAllowance(
    fromUser: string,
    toUser: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  burn(
    user: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  decimals(overrides?: CallOverrides): Promise<number>;

  decreaseAllowance(
    spender: string,
    subtractedValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getAverageStableRate(overrides?: CallOverrides): Promise<BigNumber>;

  getIncentivesController(overrides?: CallOverrides): Promise<string>;

  getSupplyData(
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber, BigNumber, number]>;

  getTotalSupplyAndAvgRate(
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  getTotalSupplyLastUpdated(overrides?: CallOverrides): Promise<number>;

  getUserLastUpdated(user: string, overrides?: CallOverrides): Promise<number>;

  getUserStableRate(
    user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  increaseAllowance(
    spender: string,
    addedValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initialize(
    pool: string,
    underlyingAsset: string,
    incentivesController: string,
    debtTokenDecimals: BigNumberish,
    debtTokenName: string,
    debtTokenSymbol: string,
    params: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  mint(
    user: string,
    onBehalfOf: string,
    amount: BigNumberish,
    rate: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  principalBalanceOf(
    user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  symbol(overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transfer(
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferFrom(
    sender: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    DEBT_TOKEN_REVISION(overrides?: CallOverrides): Promise<BigNumber>;

    POOL(overrides?: CallOverrides): Promise<string>;

    UNDERLYING_ASSET_ADDRESS(overrides?: CallOverrides): Promise<string>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    approveDelegation(
      delegatee: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    borrowAllowance(
      fromUser: string,
      toUser: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    burn(
      user: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    decimals(overrides?: CallOverrides): Promise<number>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getAverageStableRate(overrides?: CallOverrides): Promise<BigNumber>;

    getIncentivesController(overrides?: CallOverrides): Promise<string>;

    getSupplyData(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber, number]>;

    getTotalSupplyAndAvgRate(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    getTotalSupplyLastUpdated(overrides?: CallOverrides): Promise<number>;

    getUserLastUpdated(
      user: string,
      overrides?: CallOverrides
    ): Promise<number>;

    getUserStableRate(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    initialize(
      pool: string,
      underlyingAsset: string,
      incentivesController: string,
      debtTokenDecimals: BigNumberish,
      debtTokenName: string,
      debtTokenSymbol: string,
      params: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    mint(
      user: string,
      onBehalfOf: string,
      amount: BigNumberish,
      rate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    name(overrides?: CallOverrides): Promise<string>;

    principalBalanceOf(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "Approval(address,address,uint256)"(
      owner?: string | null,
      spender?: string | null,
      value?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { owner: string; spender: string; value: BigNumber }
    >;

    Approval(
      owner?: string | null,
      spender?: string | null,
      value?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { owner: string; spender: string; value: BigNumber }
    >;

    "BorrowAllowanceDelegated(address,address,address,uint256)"(
      fromUser?: string | null,
      toUser?: string | null,
      asset?: null,
      amount?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber],
      { fromUser: string; toUser: string; asset: string; amount: BigNumber }
    >;

    BorrowAllowanceDelegated(
      fromUser?: string | null,
      toUser?: string | null,
      asset?: null,
      amount?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber],
      { fromUser: string; toUser: string; asset: string; amount: BigNumber }
    >;

    "Burn(address,uint256,uint256,uint256,uint256,uint256)"(
      user?: string | null,
      amount?: null,
      currentBalance?: null,
      balanceIncrease?: null,
      avgStableRate?: null,
      newTotalSupply?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber],
      {
        user: string;
        amount: BigNumber;
        currentBalance: BigNumber;
        balanceIncrease: BigNumber;
        avgStableRate: BigNumber;
        newTotalSupply: BigNumber;
      }
    >;

    Burn(
      user?: string | null,
      amount?: null,
      currentBalance?: null,
      balanceIncrease?: null,
      avgStableRate?: null,
      newTotalSupply?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber],
      {
        user: string;
        amount: BigNumber;
        currentBalance: BigNumber;
        balanceIncrease: BigNumber;
        avgStableRate: BigNumber;
        newTotalSupply: BigNumber;
      }
    >;

    "Initialized(address,address,address,uint8,string,string,bytes)"(
      underlyingAsset?: string | null,
      pool?: string | null,
      incentivesController?: null,
      debtTokenDecimals?: null,
      debtTokenName?: null,
      debtTokenSymbol?: null,
      params?: null
    ): TypedEventFilter<
      [string, string, string, number, string, string, string],
      {
        underlyingAsset: string;
        pool: string;
        incentivesController: string;
        debtTokenDecimals: number;
        debtTokenName: string;
        debtTokenSymbol: string;
        params: string;
      }
    >;

    Initialized(
      underlyingAsset?: string | null,
      pool?: string | null,
      incentivesController?: null,
      debtTokenDecimals?: null,
      debtTokenName?: null,
      debtTokenSymbol?: null,
      params?: null
    ): TypedEventFilter<
      [string, string, string, number, string, string, string],
      {
        underlyingAsset: string;
        pool: string;
        incentivesController: string;
        debtTokenDecimals: number;
        debtTokenName: string;
        debtTokenSymbol: string;
        params: string;
      }
    >;

    "Mint(address,address,uint256,uint256,uint256,uint256,uint256,uint256)"(
      user?: string | null,
      onBehalfOf?: string | null,
      amount?: null,
      currentBalance?: null,
      balanceIncrease?: null,
      newRate?: null,
      avgStableRate?: null,
      newTotalSupply?: null
    ): TypedEventFilter<
      [
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ],
      {
        user: string;
        onBehalfOf: string;
        amount: BigNumber;
        currentBalance: BigNumber;
        balanceIncrease: BigNumber;
        newRate: BigNumber;
        avgStableRate: BigNumber;
        newTotalSupply: BigNumber;
      }
    >;

    Mint(
      user?: string | null,
      onBehalfOf?: string | null,
      amount?: null,
      currentBalance?: null,
      balanceIncrease?: null,
      newRate?: null,
      avgStableRate?: null,
      newTotalSupply?: null
    ): TypedEventFilter<
      [
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ],
      {
        user: string;
        onBehalfOf: string;
        amount: BigNumber;
        currentBalance: BigNumber;
        balanceIncrease: BigNumber;
        newRate: BigNumber;
        avgStableRate: BigNumber;
        newTotalSupply: BigNumber;
      }
    >;

    "Transfer(address,address,uint256)"(
      from?: string | null,
      to?: string | null,
      value?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { from: string; to: string; value: BigNumber }
    >;

    Transfer(
      from?: string | null,
      to?: string | null,
      value?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { from: string; to: string; value: BigNumber }
    >;
  };

  estimateGas: {
    DEBT_TOKEN_REVISION(overrides?: CallOverrides): Promise<BigNumber>;

    POOL(overrides?: CallOverrides): Promise<BigNumber>;

    UNDERLYING_ASSET_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    approveDelegation(
      delegatee: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    borrowAllowance(
      fromUser: string,
      toUser: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    burn(
      user: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getAverageStableRate(overrides?: CallOverrides): Promise<BigNumber>;

    getIncentivesController(overrides?: CallOverrides): Promise<BigNumber>;

    getSupplyData(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalSupplyAndAvgRate(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalSupplyLastUpdated(overrides?: CallOverrides): Promise<BigNumber>;

    getUserLastUpdated(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserStableRate(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initialize(
      pool: string,
      underlyingAsset: string,
      incentivesController: string,
      debtTokenDecimals: BigNumberish,
      debtTokenName: string,
      debtTokenSymbol: string,
      params: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    mint(
      user: string,
      onBehalfOf: string,
      amount: BigNumberish,
      rate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    principalBalanceOf(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DEBT_TOKEN_REVISION(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    POOL(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    UNDERLYING_ASSET_ADDRESS(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    approveDelegation(
      delegatee: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    borrowAllowance(
      fromUser: string,
      toUser: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    burn(
      user: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getAverageStableRate(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getIncentivesController(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSupplyData(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTotalSupplyAndAvgRate(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotalSupplyLastUpdated(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserLastUpdated(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserStableRate(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      pool: string,
      underlyingAsset: string,
      incentivesController: string,
      debtTokenDecimals: BigNumberish,
      debtTokenName: string,
      debtTokenSymbol: string,
      params: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    mint(
      user: string,
      onBehalfOf: string,
      amount: BigNumberish,
      rate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    principalBalanceOf(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
