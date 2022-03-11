pragma solidity ^0.8.4;

interface IWithdrawManager {
    event ExitCancelled(uint256 indexed exitId);
    event ExitPeriodUpdate(
        uint256 indexed oldExitPeriod,
        uint256 indexed newExitPeriod
    );
    event ExitStarted(
        address indexed exitor,
        uint256 indexed exitId,
        address indexed token,
        uint256 amount,
        bool isRegularExit
    );
    event ExitUpdated(
        uint256 indexed exitId,
        uint256 indexed age,
        address signer
    );
    event OwnershipTransferred(
        address indexed previousOwner,
        address indexed newOwner
    );
    event Withdraw(
        uint256 indexed exitId,
        address indexed user,
        address indexed token,
        uint256 amount
    );


    function HALF_EXIT_PERIOD() external view returns (uint256);

    function ON_FINALIZE_GAS_LIMIT() external view returns (uint32);

    function addExitToQueue(
        address exitor,
        address childToken,
        address rootToken,
        uint256 exitAmountOrTokenId,
        bytes32 txHash,
        bool isRegularExit,
        uint256 priority
    ) external;

    function addInput(
        uint256 exitId,
        uint256 age,
        address utxoOwner,
        address token
    ) external;

    function challengeExit(
        uint256 exitId,
        uint256 inputId,
        bytes calldata challengeData,
        address adjudicatorPredicate
    ) external;

    function createExitQueue(address token) external;

    function exitNft() external view returns (address);

    function exitWindow() external view returns (uint256);

    function exits(uint256)
        external
        view
        returns (
            uint256 receiptAmountOrNFTId,
            bytes32 txHash,
            address owner,
            address token,
            bool isRegularExit,
            address predicate
        );

    function exitsQueues(address) external view returns (address);

    function isOwner() external view returns (bool);

    function owner() external view returns (address);

    function ownerExits(bytes32) external view returns (uint256);

    function processExits(address _token) external;

    function processExitsBatch(address[] calldata _tokens) external;

    function renounceOwnership() external;

    function startExitWithDepositedTokens(
        uint256 depositId,
        address token,
        uint256 amountOrToken
    ) external payable;

    function transferOwnership(address newOwner) external;

    function updateExitPeriod(uint256 halfExitPeriod) external;

    function verifyInclusion(
        bytes calldata data,
        uint8 offset,
        bool verifyTxInclusion
    ) external view returns (uint256);
}