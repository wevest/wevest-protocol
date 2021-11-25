// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.6.12;
pragma experimental ABIEncoderV2;

interface IYieldFarmingPool {
    function deposit(address vault, address asset, uint amount) external returns(uint256);

    function withdraw(address vault, uint256 maxShares) external returns(uint256);

    function totalEarning(address vault, address asset) external view returns(uint256);

    function lenderInterest(
        address vault, 
        address asset, 
        address user,
        address wvToken
    ) external view returns(uint256);

    function swap(
        address _tokenIn,
        address _tokenOut,
        uint _amountIn
    ) external;
}
