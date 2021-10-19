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
} from "ethers";
import {
  Contract,
  ContractTransaction,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface DefaultReserveInterestRateStrategyInterface
  extends ethers.utils.Interface {
  functions: {
    "EXCESS_UTILIZATION_RATE()": FunctionFragment;
    "OPTIMAL_UTILIZATION_RATE()": FunctionFragment;
    "addressesProvider()": FunctionFragment;
    "baseVariableBorrowRate()": FunctionFragment;
    "calculateInterestRates(address,address,uint256,uint256,uint256,uint256,uint256,uint256)": FunctionFragment;
    "getMaxVariableBorrowRate()": FunctionFragment;
    "stableRateSlope1()": FunctionFragment;
    "stableRateSlope2()": FunctionFragment;
    "variableRateSlope1()": FunctionFragment;
    "variableRateSlope2()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "EXCESS_UTILIZATION_RATE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "OPTIMAL_UTILIZATION_RATE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addressesProvider",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "baseVariableBorrowRate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "calculateInterestRates",
    values: [
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getMaxVariableBorrowRate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stableRateSlope1",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stableRateSlope2",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "variableRateSlope1",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "variableRateSlope2",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "EXCESS_UTILIZATION_RATE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "OPTIMAL_UTILIZATION_RATE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addressesProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "baseVariableBorrowRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateInterestRates",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMaxVariableBorrowRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stableRateSlope1",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stableRateSlope2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "variableRateSlope1",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "variableRateSlope2",
    data: BytesLike
  ): Result;

  events: {};
}

export class DefaultReserveInterestRateStrategy extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: DefaultReserveInterestRateStrategyInterface;

  functions: {
    EXCESS_UTILIZATION_RATE(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "EXCESS_UTILIZATION_RATE()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    OPTIMAL_UTILIZATION_RATE(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "OPTIMAL_UTILIZATION_RATE()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    addressesProvider(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "addressesProvider()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    baseVariableBorrowRate(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "baseVariableBorrowRate()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "calculateInterestRates(address,address,uint256,uint256,uint256,uint256,uint256,uint256)"(
      reserve: string,
      aToken: string,
      liquidityAdded: BigNumberish,
      liquidityTaken: BigNumberish,
      totalStableDebt: BigNumberish,
      totalVariableDebt: BigNumberish,
      averageStableBorrowRate: BigNumberish,
      reserveFactor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
    }>;

    "calculateInterestRates(address,uint256,uint256,uint256,uint256,uint256)"(
      reserve: string,
      availableLiquidity: BigNumberish,
      totalStableDebt: BigNumberish,
      totalVariableDebt: BigNumberish,
      averageStableBorrowRate: BigNumberish,
      reserveFactor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
    }>;

    getMaxVariableBorrowRate(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "getMaxVariableBorrowRate()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    stableRateSlope1(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "stableRateSlope1()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    stableRateSlope2(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "stableRateSlope2()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    variableRateSlope1(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "variableRateSlope1()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    variableRateSlope2(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "variableRateSlope2()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;
  };

  EXCESS_UTILIZATION_RATE(overrides?: CallOverrides): Promise<BigNumber>;

  "EXCESS_UTILIZATION_RATE()"(overrides?: CallOverrides): Promise<BigNumber>;

  OPTIMAL_UTILIZATION_RATE(overrides?: CallOverrides): Promise<BigNumber>;

  "OPTIMAL_UTILIZATION_RATE()"(overrides?: CallOverrides): Promise<BigNumber>;

  addressesProvider(overrides?: CallOverrides): Promise<string>;

  "addressesProvider()"(overrides?: CallOverrides): Promise<string>;

  baseVariableBorrowRate(overrides?: CallOverrides): Promise<BigNumber>;

  "baseVariableBorrowRate()"(overrides?: CallOverrides): Promise<BigNumber>;

  "calculateInterestRates(address,address,uint256,uint256,uint256,uint256,uint256,uint256)"(
    reserve: string,
    aToken: string,
    liquidityAdded: BigNumberish,
    liquidityTaken: BigNumberish,
    totalStableDebt: BigNumberish,
    totalVariableDebt: BigNumberish,
    averageStableBorrowRate: BigNumberish,
    reserveFactor: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    0: BigNumber;
    1: BigNumber;
    2: BigNumber;
  }>;

  "calculateInterestRates(address,uint256,uint256,uint256,uint256,uint256)"(
    reserve: string,
    availableLiquidity: BigNumberish,
    totalStableDebt: BigNumberish,
    totalVariableDebt: BigNumberish,
    averageStableBorrowRate: BigNumberish,
    reserveFactor: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    0: BigNumber;
    1: BigNumber;
    2: BigNumber;
  }>;

  getMaxVariableBorrowRate(overrides?: CallOverrides): Promise<BigNumber>;

  "getMaxVariableBorrowRate()"(overrides?: CallOverrides): Promise<BigNumber>;

  stableRateSlope1(overrides?: CallOverrides): Promise<BigNumber>;

  "stableRateSlope1()"(overrides?: CallOverrides): Promise<BigNumber>;

  stableRateSlope2(overrides?: CallOverrides): Promise<BigNumber>;

  "stableRateSlope2()"(overrides?: CallOverrides): Promise<BigNumber>;

  variableRateSlope1(overrides?: CallOverrides): Promise<BigNumber>;

  "variableRateSlope1()"(overrides?: CallOverrides): Promise<BigNumber>;

  variableRateSlope2(overrides?: CallOverrides): Promise<BigNumber>;

  "variableRateSlope2()"(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    EXCESS_UTILIZATION_RATE(overrides?: CallOverrides): Promise<BigNumber>;

    "EXCESS_UTILIZATION_RATE()"(overrides?: CallOverrides): Promise<BigNumber>;

    OPTIMAL_UTILIZATION_RATE(overrides?: CallOverrides): Promise<BigNumber>;

    "OPTIMAL_UTILIZATION_RATE()"(overrides?: CallOverrides): Promise<BigNumber>;

    addressesProvider(overrides?: CallOverrides): Promise<string>;

    "addressesProvider()"(overrides?: CallOverrides): Promise<string>;

    baseVariableBorrowRate(overrides?: CallOverrides): Promise<BigNumber>;

    "baseVariableBorrowRate()"(overrides?: CallOverrides): Promise<BigNumber>;

    "calculateInterestRates(address,address,uint256,uint256,uint256,uint256,uint256,uint256)"(
      reserve: string,
      aToken: string,
      liquidityAdded: BigNumberish,
      liquidityTaken: BigNumberish,
      totalStableDebt: BigNumberish,
      totalVariableDebt: BigNumberish,
      averageStableBorrowRate: BigNumberish,
      reserveFactor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
    }>;

    "calculateInterestRates(address,uint256,uint256,uint256,uint256,uint256)"(
      reserve: string,
      availableLiquidity: BigNumberish,
      totalStableDebt: BigNumberish,
      totalVariableDebt: BigNumberish,
      averageStableBorrowRate: BigNumberish,
      reserveFactor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
    }>;

    getMaxVariableBorrowRate(overrides?: CallOverrides): Promise<BigNumber>;

    "getMaxVariableBorrowRate()"(overrides?: CallOverrides): Promise<BigNumber>;

    stableRateSlope1(overrides?: CallOverrides): Promise<BigNumber>;

    "stableRateSlope1()"(overrides?: CallOverrides): Promise<BigNumber>;

    stableRateSlope2(overrides?: CallOverrides): Promise<BigNumber>;

    "stableRateSlope2()"(overrides?: CallOverrides): Promise<BigNumber>;

    variableRateSlope1(overrides?: CallOverrides): Promise<BigNumber>;

    "variableRateSlope1()"(overrides?: CallOverrides): Promise<BigNumber>;

    variableRateSlope2(overrides?: CallOverrides): Promise<BigNumber>;

    "variableRateSlope2()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    EXCESS_UTILIZATION_RATE(overrides?: CallOverrides): Promise<BigNumber>;

    "EXCESS_UTILIZATION_RATE()"(overrides?: CallOverrides): Promise<BigNumber>;

    OPTIMAL_UTILIZATION_RATE(overrides?: CallOverrides): Promise<BigNumber>;

    "OPTIMAL_UTILIZATION_RATE()"(overrides?: CallOverrides): Promise<BigNumber>;

    addressesProvider(overrides?: CallOverrides): Promise<BigNumber>;

    "addressesProvider()"(overrides?: CallOverrides): Promise<BigNumber>;

    baseVariableBorrowRate(overrides?: CallOverrides): Promise<BigNumber>;

    "baseVariableBorrowRate()"(overrides?: CallOverrides): Promise<BigNumber>;

    "calculateInterestRates(address,address,uint256,uint256,uint256,uint256,uint256,uint256)"(
      reserve: string,
      aToken: string,
      liquidityAdded: BigNumberish,
      liquidityTaken: BigNumberish,
      totalStableDebt: BigNumberish,
      totalVariableDebt: BigNumberish,
      averageStableBorrowRate: BigNumberish,
      reserveFactor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "calculateInterestRates(address,uint256,uint256,uint256,uint256,uint256)"(
      reserve: string,
      availableLiquidity: BigNumberish,
      totalStableDebt: BigNumberish,
      totalVariableDebt: BigNumberish,
      averageStableBorrowRate: BigNumberish,
      reserveFactor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMaxVariableBorrowRate(overrides?: CallOverrides): Promise<BigNumber>;

    "getMaxVariableBorrowRate()"(overrides?: CallOverrides): Promise<BigNumber>;

    stableRateSlope1(overrides?: CallOverrides): Promise<BigNumber>;

    "stableRateSlope1()"(overrides?: CallOverrides): Promise<BigNumber>;

    stableRateSlope2(overrides?: CallOverrides): Promise<BigNumber>;

    "stableRateSlope2()"(overrides?: CallOverrides): Promise<BigNumber>;

    variableRateSlope1(overrides?: CallOverrides): Promise<BigNumber>;

    "variableRateSlope1()"(overrides?: CallOverrides): Promise<BigNumber>;

    variableRateSlope2(overrides?: CallOverrides): Promise<BigNumber>;

    "variableRateSlope2()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    EXCESS_UTILIZATION_RATE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "EXCESS_UTILIZATION_RATE()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    OPTIMAL_UTILIZATION_RATE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "OPTIMAL_UTILIZATION_RATE()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    addressesProvider(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "addressesProvider()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    baseVariableBorrowRate(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "baseVariableBorrowRate()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "calculateInterestRates(address,address,uint256,uint256,uint256,uint256,uint256,uint256)"(
      reserve: string,
      aToken: string,
      liquidityAdded: BigNumberish,
      liquidityTaken: BigNumberish,
      totalStableDebt: BigNumberish,
      totalVariableDebt: BigNumberish,
      averageStableBorrowRate: BigNumberish,
      reserveFactor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "calculateInterestRates(address,uint256,uint256,uint256,uint256,uint256)"(
      reserve: string,
      availableLiquidity: BigNumberish,
      totalStableDebt: BigNumberish,
      totalVariableDebt: BigNumberish,
      averageStableBorrowRate: BigNumberish,
      reserveFactor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMaxVariableBorrowRate(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getMaxVariableBorrowRate()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    stableRateSlope1(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "stableRateSlope1()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    stableRateSlope2(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "stableRateSlope2()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    variableRateSlope1(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "variableRateSlope1()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    variableRateSlope2(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "variableRateSlope2()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
