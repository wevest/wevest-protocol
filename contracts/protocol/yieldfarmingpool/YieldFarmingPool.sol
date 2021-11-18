// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.6.12;
pragma experimental ABIEncoderV2;

import {VersionedInitializable} from '../libraries/wevest-upgradeability/VersionedInitializable.sol';
import {ILendingPool} from '../../interfaces/ILendingPool.sol';
// import {IYieldFarmingPool} from '../../interfaces/IYieldFarmingPool.sol';
import {ILendingPoolAddressesProvider} from '../../interfaces/ILendingPoolAddressesProvider.sol';
import {IVault} from "../../interfaces/IVault.sol";
import {IWvToken} from '../../interfaces/IWvToken.sol';
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {IPriceOracleGetter} from '../../interfaces/IPriceOracleGetter.sol';
import "hardhat/console.sol";

contract YieldFarmingPool is VersionedInitializable {

    uint256 public constant YIELDFARMING_POOL_REVISION = 0x2;

    ILendingPoolAddressesProvider internal _addressesProvider;

    function initialize(ILendingPoolAddressesProvider provider) public initializer {
        _addressesProvider = provider;
    }

    function getRevision() internal pure override returns (uint256) {
        return YIELDFARMING_POOL_REVISION;
    }

    modifier amountGreaterThanZero(uint256 amount) {
        require(amount > 0, "Invalid amount");
        _;
    }

    function deposit(address vault, address asset, uint256 amount) 
        external
        amountGreaterThanZero(amount)
        returns(uint256) 
    {
        uint256 assetBalance = IERC20(asset).balanceOf(address(this));
        require(assetBalance >= amount, "Exceeds YF pool asset balance");
        IERC20(asset).approve(vault, amount);
        return IVault(vault).deposit(amount);
    }

    function withdraw(address vault, uint256 maxShares) 
        external
        amountGreaterThanZero(maxShares)
        returns(uint256) 
    {
        uint256 balanceShares = IVault(vault).balanceOf(address(this));
        require(balanceShares >= maxShares, "Exceeds YF pool shares balance");
        uint256 redeemedAmount = IVault(vault).withdraw(maxShares);
        console.log("redeemed amount %s", redeemedAmount);
        return redeemedAmount;
    }

    function balance(address vault) 
        external
        view
        returns(uint256)
    {
        uint256 price = IVault(vault).pricePerShare();
        uint256 balanceShares = IVault(vault).balanceOf(address(this));
        return balanceShares * price;
    }

    function assetInterest(address vault, address asset)
        public
        view
        returns(uint256)
    {
        uint256 price = IVault(vault).pricePerShare();
        uint256 balanceShares = IVault(vault).balanceOf(address(this));
        uint256 depositTokenBalance = IERC20(asset).balanceOf(address(this));

        address oracle = _addressesProvider.getPriceOracle();
        uint256 priceOfDepositToken = 
            IPriceOracleGetter(oracle).getAssetPrice(asset);
        priceOfDepositToken = 245051896209141;
        uint256 interest = price * balanceShares / 10**6 - depositTokenBalance * priceOfDepositToken / 10**18;
        return interest;
    }
    
    function userAssetInterest(
        address vault, 
        address asset, 
        address user,
        address wvToken
    )
        external
        view
        returns(uint256)
    {
        uint256 totalInterest = assetInterest(vault, asset);
        uint256 userBalance = IWvToken(wvToken).balanceOf(user);
        uint256 yfPoolBalance = IERC20(asset).balanceOf(address(this));
        return totalInterest * userBalance / yfPoolBalance;
    }
}