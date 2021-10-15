// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.6.12;

interface IScaledBalanceToken {
  /**
   * @param user The user whose balance is calculated
   * @return The scaled balance of the user
   **/
  function scaledBalanceOf(address user) external view returns (uint256);

  /**
   * @param user The address of the user
   * @return The scaled balance of the user
   * @return The scaled balance and the scaled total supply
   **/
  function getScaledUserBalanceAndSupply(address user) external view returns (uint256, uint256);

  /**
   * @return The scaled total supply
   **/
  function scaledTotalSupply() external view returns (uint256);
}