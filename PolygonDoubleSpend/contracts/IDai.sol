pragma solidity ^0.8.4;

interface IDai {
    event Approval(address indexed src, address indexed guy, uint256 wad);
    event LogNote(
        bytes4 indexed sig,
        address indexed usr,
        bytes32 indexed arg1,
        bytes32 indexed arg2,
        bytes data
    ) anonymous;
    event Transfer(address indexed src, address indexed dst, uint256 wad);

    function DOMAIN_SEPARATOR() external view returns (bytes32);

    function PERMIT_TYPEHASH() external view returns (bytes32);

    function allowance(address, address) external view returns (uint256);

    function approve(address usr, uint256 wad) external returns (bool);

    function balanceOf(address) external view returns (uint256);

    function burn(address usr, uint256 wad) external;

    function decimals() external view returns (uint8);

    function deny(address guy) external;

    function mint(address usr, uint256 wad) external;

    function move(
        address src,
        address dst,
        uint256 wad
    ) external;

    function name() external view returns (string memory);

    function nonces(address) external view returns (uint256);

    function permit(
        address holder,
        address spender,
        uint256 nonce,
        uint256 expiry,
        bool allowed,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external;

    function pull(address usr, uint256 wad) external;

    function push(address usr, uint256 wad) external;

    function rely(address guy) external;

    function symbol() external view returns (string memory);

    function totalSupply() external view returns (uint256);

    function transfer(address dst, uint256 wad) external returns (bool);

    function transferFrom(
        address src,
        address dst,
        uint256 wad
    ) external returns (bool);

    function version() external view returns (string memory);

    function wards(address) external view returns (uint256);
}