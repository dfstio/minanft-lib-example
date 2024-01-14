# Mina NFT library usage example

MinaNFT library is designed for the easy integration for third-party developers and
corporations with MinaNFT, allowing to start minting NFTs, adding public and private keys
and verifying data off-chain and on-chain within one hour with easy and intiutive API.

You can test this library with this small example - see files example.ts and example.js

## Installation

You need to install node and git
and clone this repo

```
git clone https://github.com/dfstio/minanft-lib-example
cd minanft-lib-example
yarn
```

## Setting environment

Create env.json using env.example.json as an example and fill in your values. It is not required for local blockchain

## Running example:

// For TypeScript, local blockchain
`yarn local`

// For TypeScript, TestwWorld2 blockchain
`yarn testworld2`

// For JavaScript, local blockchain
`yarn localjs`

// For JavaScript, TestWorld2 blockchain
`yarn testworld2js`

## Indexing NFT

After the transaction is successfully included in the block, you can change the name of the NFT in indexnft.ts and run

`yarn indexnft`

to index the NFT for minanft.io frontend (only TestWorld2 network)

## Website

https://minanft.io

## Documentation

https://docs.minanft.io

## Library on NPM

https://www.npmjs.com/package/minanft

## Example

https://github.com/dfstio/minanft-lib-example

## Faucet

https://faucet.minaprotocol.com
