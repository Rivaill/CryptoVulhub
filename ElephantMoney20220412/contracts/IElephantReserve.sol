pragma solidity 0.8.4;
interface IElephantReserve  {
    //Mint backed tokens using collateral tokens
    function mint(uint256 collateralAmount) external returns (uint256 backedAmount, uint256 feeAmount);

    //Estimate is a simple top level estimate that factors the processingFee
    function estimateMint(uint256 collateralAmount) external view returns (uint256 backedAmount, uint256 feeAmount);

    //Redeem backed token for collateral and core tokens based on the collateralFactor and collateralizationRatio of the treasuries
    function redeem(uint256 backedAmount) external returns (uint collateralAmount, uint coreAmount, uint adjustedCoreAmount, uint feeAmount);

    //Redeems a credit from a whitelisted consumer.  Funds will be pulled from the core treasury
    function redeemCredit(address destination, uint256 creditAmount)  external returns (uint coreAmount, uint adjustedCoreAmount, uint coreAdjustedCreditAmount, uint feeAmount);

    //Only whitelisted
    function redeemCreditAsBacked(address destination, uint creditAmount) external returns (uint backedAmount, uint feeAmount);



    //Estimates the redemption and uses collateralizationRatio to scale variable core component
    function estimateRedemption(uint256 backedAmount) external view returns (uint collateralAmount, uint coreAmount, uint adjustedCoreAmount, uint coreAdjustedCreditAmount, uint feeAmount, uint totalCollateralValue);

    // This function is sensitive to slippage and that isn't a bad thing...
    // Don't dump your core or backed tokens... This is a community project
    function estimateCollateralToCore(uint collateralAmount) external view returns (uint wethAmount, uint coreAmount);

    // This function is sensitive to slippage and that isn't a bad thing...
    // Estimates the amount of  core tokens getting transfered to USD collateral tokens
    function estimateCoreToCollateral(uint coreAmount) external view returns (uint wethAmount, uint collateralAmount);

    //Returns the ratio of core over collateralization to proportional hard collateral in the treasuries
    function collateralizationRatio() external view returns (uint256 cratio);

    //Redeem a credit for the rewardpools.  Being sensitive to slippage is OK even though we are pulling from the pools
    function redeemCollateralCreditToWETH(uint256 collateralAmount)  external   returns (uint wethAmount);

}