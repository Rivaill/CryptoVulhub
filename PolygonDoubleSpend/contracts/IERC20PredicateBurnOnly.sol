pragma solidity ^0.8.4;

interface IERC20PredicateBurnOnly {
    function CHAINID() external view returns (uint256);

    function interpretStateUpdate(bytes calldata state)
        external
        view
        returns (bytes memory);

    function networkId() external view returns (bytes memory);

    function onFinalizeExit(bytes calldata data) external;

    function startExitWithBurntTokens(bytes calldata data) external;

    function verifyDeprecation(
        bytes calldata exit,
        bytes calldata inputUtxo,
        bytes calldata challengeData
    ) external returns (bool);
}