// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.6.12;

import {ILendingPool} from './ILendingPool.sol';
import {IWevestIncentivesController} from './IWevestIncentivesController.sol';

/**
 * @title IInitializableWvLPToken
 * @notice Interface for the initialize function on WvLPToken
 * @author Aave
 **/
interface IInitializableWvLPToken {
  /**
   * @dev Emitted when an wvLPToken is initialized
   * @param underlyingAsset The address of the underlying asset
   * @param pool The address of the associated lending pool
   * @param treasury The address of the treasury
   * @param incentivesController The address of the incentives controller for this wvLPToken
   * @param wvLPTokenDecimals the decimals of the underlying
   * @param wvLPTokenName the name of the wvLPToken
   * @param wvLPTokenSymbol the symbol of the wvLPToken
   * @param params A set of encoded parameters for additional initialization
   **/
  event Initialized(
    address indexed underlyingAsset,
    address indexed pool,
    address treasury,
    address incentivesController,
    uint8 wvLPTokenDecimals,
    string wvLPTokenName,
    string wvLPTokenSymbol,
    bytes params
  );

  /**
   * @dev Initializes the wvLPToken
   * @param pool The address of the lending pool where this wvLPToken will be used
   * @param treasury The address of the Aave treasury, receiving the fees on this wvLPToken
   * @param underlyingAsset The address of the underlying asset of this wvLPToken (E.g. WETH for aWETH)
   * @param incentivesController The smart contract managing potential incentives distribution
   * @param wvLPTokenDecimals The decimals of the wvLPToken, same as the underlying asset's
   * @param wvLPTokenName The name of the wvLPToken
   * @param wvLPTokenSymbol The symbol of the wvLPToken
   */
  function initialize(
    ILendingPool pool,
    address treasury,
    address underlyingAsset,
    IWevestIncentivesController incentivesController,
    uint8 wvLPTokenDecimals,
    string calldata wvLPTokenName,
    string calldata wvLPTokenSymbol,
    bytes calldata params
  ) external;
}