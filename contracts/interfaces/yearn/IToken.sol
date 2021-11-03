// SPDX-License-Identifier: agpl-3.0
pragma solidity ^0.6.0;

// NOTE: Basically an alias for Vaults
interface yERC20 {
    function deposit(uint256 _amount) external;

    function withdraw(uint256 _amount) external;

    function getPricePerFullShare() external view returns (uint256);
}