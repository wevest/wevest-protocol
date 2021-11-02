// SPDX-License-Identifier: agpl-3.0
pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

import "../configuration/LendingPoolAddressesProvider.sol";
import "../lendingpool/LendingPool.sol";
import "../lendingpool/LendingPoolDataProvider.sol";
import "../lendingpool/LendingPoolCore.sol";

contract DebtToken is ERC20 {

    address public underlyingAssetAddress;

    LendingPoolAddressesProvider private addressesProvider;
    LendingPoolCore private core;
    LendingPool private pool;
    LendingPoolDataProvider private dataProvider;

    modifier onlyLendingPool {
        require(
            msg.sender == address(pool),
            "The caller of this function must be a lending pool"
        );
        _;
    }

    constructor(
        LendingPoolAddressesProvider _addressesProvider,
        address _underlyingAsset,
        uint8 _underlyingAssetDecimals,
        string memory _name,
        string memory _symbol
    ) public ERC20(_name, _symbol) {
        _setupDecimals(_underlyingAssetDecimals);
        addressesProvider = _addressesProvider;
        core = LendingPoolCore(addressesProvider.getLendingPoolCore());
        pool = LendingPool(addressesProvider.getLendingPool());
        dataProvider = LendingPoolDataProvider(addressesProvider.getLendingPoolDataProvider());
        underlyingAssetAddress = _underlyingAsset;
    }

    function balanceOf(address _user) public view virtual override returns (uint256) {
        return super.balanceOf(_user);
    }

    /**
    * @dev Mints debt token to the `user` address
    * @param user the address receiving the debt tokens
    * @param amount the amount of debt being minted
    */
    function mint(
        address user, 
        uint256 amount
    ) external onlyLendingPool {
        _mint(user, amount);
    }

    /**
    * @dev Burns user debt token
    * - Only callable by the LendingPool
    * @param user The user whose debt is getting burned
    * @param amount The amount getting burned
    **/

    function burn(
        address user,
        uint256 amount
    ) external onlyLendingPool {
        _burn(user, amount);
    }
}