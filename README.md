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

TypeScript, local blockchain

```
yarn local
```

TypeScript, Berkeley blockchain

```
yarn berkeley
```

TypeScript, Berkeley blockchain, minimum example

```
yarn minimum
```

JavaScript, local blockchain

```
yarn localjs
```

JavaScript, Berkeley blockchain

```
yarn berkeleyjs
```

## Indexing NFT

After the transaction is successfully included in the block, you can change the name of the NFT in indexnft.ts and run

```
yarn indexnft
```

to index the NFT for minanft.io frontend (only Berkeley network)

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

## Example log - TestWorld2

```
Deployer balance: 63.686999991
Pinning image...
pinFile result: {
  IpfsHash: 'QmQRAK6oDejNqCGEQEPwtSQRHw3eL8bkUf93odRnuFAmji',
  PinSize: 2092933,
  Timestamp: '2023-11-22T16:57:04.690Z',
  isDuplicate: true
}
Calculating image Merkle tree root...
Image Merkle tree root calculated: 4:04.098 (m:ss.mmm)
Calculated SHA-3 512: 12.571ms
Pinning file to IPFS...
pinFile result: {
  IpfsHash: 'Qme3jDkLmEKHDkkMpp1H15zzWhQMmqBizVBcRj2UmWe5Lj',
  PinSize: 265638,
  Timestamp: '2023-11-10T13:10:48.471Z',
  isDuplicate: true
}
Calculating file Merkle tree root...
File Merkle tree root calculated: 25.581s
Calculated SHA-3 512: 2.898ms
json: {
  "name": "@test_okcoe6y7tp",
  "description": "This is my long description of the NFT @test. Can be of any length, supports **markdown**.",
  "image": "https://gateway.pinata.cloud/ipfs/QmQRAK6oDejNqCGEQEPwtSQRHw3eL8bkUf93odRnuFAmji",
  "external_url": "https://minanft.io/@test_okcoe6y7tp",
  "version": "0",
  "time": 1705258721627,
  "creator": "MinaNFT library",
  "address": "B62qjAtRJzgpGKPtbXKxA5Nqa8jcDWFKjX5vsQUdqN91ee9CLbipvv9",
  "owner": "7935186224737074305286716670719531322302359092546982540700754882800251440160",
  "escrow": "0",
  "metadata": {
    "data": "14962653911891534650406780820580208853312278132987052282791262260048066271677",
    "kind": "8500103527748663492827341443781242865023359935905212332774286508485534143419"
  },
  "properties": {
    "description": {
      "data": "27506523457226124594688622157190490945197838666184664729299397064089180219757",
      "kind": "text",
      "linkedObject": {
        "type": "text",
        "MerkleTreeHeight": 8,
        "size": 90,
        "text": "This is my long description of the NFT @test. Can be of any length, supports **markdown**."
      }
    },
    "twitter": {
      "data": "@test",
      "kind": "string"
    },
    "secret": {
      "data": "mysecretvalue",
      "kind": "string",
      "isPrivate": true
    },
    "image": {
      "data": "744742074545472599884809883673302584306873974532224044179248737055122594019",
      "kind": "image",
      "linkedObject": {
        "type": "file",
        "fileMerkleTreeRoot": "14266728062141337782249168943771328782029971768091245136926749831180834044568",
        "MerkleTreeHeight": 18,
        "size": 2092429,
        "mimeType": "image/png",
        "SHA3_512": "1Q/NRemwLpwlofSARRFNz186jqXqFSL0I2P2vZIgJvN+wKkOyp2nTFUdAAMbROqMt6ogGXM5TvU2lV6dHa+giQ==",
        "filename": "sunnyday.png",
        "storage": "i:QmQRAK6oDejNqCGEQEPwtSQRHw3eL8bkUf93odRnuFAmji"
      }
    },
    "level 2 and 3 data": {
      "data": "17454595903045636927347010836081236993389843594527776621819823169384033052897",
      "kind": "map",
      "linkedObject": {
        "type": "map",
        "properties": {
          "level2-1": {
            "data": "value21",
            "kind": "string"
          },
          "level2-2": {
            "data": "value22",
            "kind": "string"
          },
          "level2-3": {
            "data": "17918742563826681862408641965129071963958922660597457205933767099995396120858",
            "kind": "text",
            "linkedObject": {
              "type": "text",
              "MerkleTreeHeight": 7,
              "size": 41,
              "text": "This is text on level 2. Can be very long"
            }
          },
          "woman": {
            "data": "19568479839056312372186989986426075833813097455848029420463865331716879702558",
            "kind": "file",
            "linkedObject": {
              "type": "file",
              "fileMerkleTreeRoot": "4911692193899654945543701504504186590310741443090166466526044610874096406940",
              "MerkleTreeHeight": 15,
              "size": 265511,
              "mimeType": "image/png",
              "SHA3_512": "LvUjVX9PlqxWsfHgIf3lvpVFy7o5hAcHVAFueQt+RP4hyr6h2f6XyeinP5jwgKhcogOhEyxHchdBdnvbdeDL9A==",
              "filename": "woman.png",
              "storage": "i:Qme3jDkLmEKHDkkMpp1H15zzWhQMmqBizVBcRj2UmWe5Lj"
            }
          },
          "level2-4": {
            "data": "8285588111605202531040894738541072590635328681101967631265604553962773840451",
            "kind": "map",
            "linkedObject": {
              "type": "map",
              "properties": {
                "level3-1": {
                  "data": "value31",
                  "kind": "string"
                },
                "level3-2": {
                  "data": "value32",
                  "kind": "string",
                  "isPrivate": true
                },
                "level3-3": {
                  "data": "value33",
                  "kind": "string"
                }
              }
            }
          }
        }
      }
    }
  }
}
Reserved: {
  success: true,
  error: undefined,
  price: {
    username: 'test_okcoe6y7tp',
    price: 19,
    currency: 'usd',
    description: 'Avatar NFT name'
  },
  isReserved: true,
  signature: '7mXHkSyh5MiLym8T3cqnfHjctX54iAwcUkxCcqrz4Lf4SaTHDDvaMDG2JvSjQoeeeaVMPCviCFLGQtfLVACdCdQ1caonygM4',
  reason: ''
}
Compiling...
MinaNFTMetadataUpdate compiled: 11.053s
MinaNFT compiled: 6.570s
MinaNFTNameServiceContract compiled: 11.420s
Deploying...
Pinning to IPFS...
pinJSON result: {
  IpfsHash: 'QmTth2s49bUn7G6CiWqQvwLjF9rLdLxEDpedCU5Bs36hGD',
  PinSize: 2757,
  Timestamp: '2024-01-14T18:59:18.725Z'
}
MinaNFT mint transaction sent: 5JvCsbpJbH781kBwWQbRgLLLt2ePwksd277BHAs4X38TnsmwcPdR
```

## Example log - TestWorld2, minimum example

```
Pinning image...
pinFile result: {
  IpfsHash: 'QmQRAK6oDejNqCGEQEPwtSQRHw3eL8bkUf93odRnuFAmji',
  PinSize: 2092933,
  Timestamp: '2023-11-22T16:57:04.690Z',
  isDuplicate: true
}
Calculated SHA-3 512: 15.376ms
NFT json: {
  "name": "@test_3jo4a5mwkv",
  "description": "",
  "image": "https://gateway.pinata.cloud/ipfs/QmQRAK6oDejNqCGEQEPwtSQRHw3eL8bkUf93odRnuFAmji",
  "external_url": "https://minanft.io/@test_3jo4a5mwkv",
  "version": "0",
  "time": 1705305595007,
  "creator": "MinaNFT library",
  "address": "B62qriYUF5bfwd9Jf2FfPM2UB4BPjSoYyumkJhcx1kpocjN3nxp8oto",
  "owner": "21855079611724537626844129022911119300139352284649900566109884176575601064322",
  "escrow": "0",
  "metadata": {
    "data": "16944423705401984042710659982750218602634622957581839341348482946890076337421",
    "kind": "730516674633923388759973824690419864197272468066232442073255703029146736285"
  },
  "properties": {
    "image": {
      "data": "26319227950489813197834752810274396748704545580806296258320731883683546545906",
      "kind": "image",
      "linkedObject": {
        "fileMerkleTreeRoot": "0",
        "MerkleTreeHeight": 0,
        "size": 2092429,
        "mimeType": "image/png",
        "SHA3_512": "1Q/NRemwLpwlofSARRFNz186jqXqFSL0I2P2vZIgJvN+wKkOyp2nTFUdAAMbROqMt6ogGXM5TvU2lV6dHa+giQ==",
        "filename": "sunnyday.png",
        "storage": "i:QmQRAK6oDejNqCGEQEPwtSQRHw3eL8bkUf93odRnuFAmji",
        "fileType": "binary",
        "metadata": "0"
      }
    }
  }
}
Reserved: {
  success: true,
  error: undefined,
  price: {
    username: 'test_3jo4a5mwkv',
    price: 19,
    currency: 'usd',
    description: 'Avatar NFT name'
  },
  isReserved: true,
  signature: '7mXABh363akJ33WZgxTwXHMVwxke2oyjaV3bB6nk8HusaKU5Fn27bHA7SgybzFuMsqSwV56EwwK2BxmQ3UdNKAN9r7n3nY6x',
  reason: ''
}
MinaNFTMetadataUpdate compiled: 10.567s
MinaNFT compiled: 6.489s
MinaNFTNameServiceContract compiled: 10.696s
Pinning to IPFS...
pinJSON result: {
  IpfsHash: 'QmNdYeTz4JkVfRD8j7fq5bZiuJPMrXSDs9jpf1zpLeaaNi',
  PinSize: 1068,
  Timestamp: '2024-01-15T08:00:25.599Z'
}
MinaNFT mint transaction sent: 5JuZVazvGUtzyZm7XK3Pj2DYqtx1QPY34x4JuYkQzbnHPBrfAJ3J
```
