# Mina NFT library usage example

MinaNFT library is designed for the easy integration for third-party developers and 
corporations with MinaNFT, allowing to start minting NFTs, adding public and private keys
and verifying data off-chain and on-chain within one hour with easy and intiutive API.

You can test this library with this small example - see files example.ts and example.js

## Installation

You need to install node and git
and clone this repo

	git clone https://github.com/dfstio/minanft-lib-example
	cd minanft-lib-example
	yarn

	
## Running example:
	// For TypeScript
	yarn example 
	
	// For JavaScript
	yarn examplejs 
	
	/**
	publicJson {
		publicMapRoot: '22731122946631793544306773678309960639073656601863129978322145324846701682624',
		publicData: {
			name: '@test',
			description: 'my nft @test',
			image: 'https/ipfs.io/ipfs/Qm...'
		}
	}
	privateJson {
		publicMapRoot: '22731122946631793544306773678309960639073656601863129978322145324846701682624',
		privateMapRoot: '22731122946631793544306773678309960639073656601863129978322145324846701682624',
		secret: '27316507744649576315264793589997090976505003005329138038060744248453624828573',
		salt: '28415388566484028622541902066833196068283745836710945290933054341632001313105',
		publicData: {
			name: '@test',
			description: 'my nft @test',
			image: 'https/ipfs.io/ipfs/Qm...'
		},
		privateData: { name: 'cohort2' }
	}
	**/
	

## Website
https://minanft.io

## MinaNFT library
https://www.npmjs.com/package/minanft






