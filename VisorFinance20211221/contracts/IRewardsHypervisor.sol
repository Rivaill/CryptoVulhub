pragma solidity ^0.8.0;

interface IRewardsHypervisor {
    function deposit(
        uint256 visrDeposit,
        address from,
        address to
    ) external returns (uint256 shares);

    function owner() external view returns (address);

    function snapshot() external;

    function transferOwnership(address newOwner) external;

    function transferTokenOwnership(address newOwner) external;

    function visr() external view returns (address);

    function vvisr() external view returns (address);

    function withdraw(
        uint256 shares,
        address to,
        address from
    ) external returns (uint256 rewards);
}