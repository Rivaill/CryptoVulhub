# Revest Finance re-hack PoC

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
Rena balance of attacker: 0.0
Exploiting...
Exploit complete.
Rena balance of attacker: 352835.865880437990126099
```
This means the attack is complete
> The block height of the fork is 14465356


## Link

* https://twitter.com/RevestFinance/status/1507968623792607233?cxt=HHwWgsC-manesO0pAAAA
* https://twitter.com/peckshield/status/1508395887348760578?cxt=HHwWhICq4aqE8-4pAAAA
