import { MinaNFT, makeString, api } from "minanft";
import { PrivateKey, Signature, Poseidon } from "o1js";
import { PINATA_JWT, DEPLOYER, JWT } from "./env.json";

async function main() {
  MinaNFT.minaInit("testworld2");
  const name = "@test_" + makeString(10);
  const ownerPrivateKey = PrivateKey.random();
  const privateKey = PrivateKey.random();
  const address = privateKey.toPublicKey();

  // Create NFT
  const nft = new MinaNFT({
    name,
    address,
    owner: Poseidon.hash(ownerPrivateKey.toPublicKey().toFields()),
  });

  await nft.updateImage({
    filename: "./images/sunnyday.png",
    pinataJWT: PINATA_JWT,
    calculateRoot: false,
  });

  console.log(`NFT json:`, JSON.stringify(nft.toJSON(), null, 2));

  // Register name
  const minanft = new api(JWT);
  const reserved = await minanft.reserveName({
    name,
    publicKey: address.toBase58(),
  });
  console.log("Reserved:", reserved);

  // Mint NFT
  await MinaNFT.compile();
  await nft.mint({
    deployer: PrivateKey.fromBase58(DEPLOYER),
    pinataJWT: PINATA_JWT,
    signature: Signature.fromBase58(reserved.signature!),
    privateKey,
  });
}

main().catch((error) => {
  console.error(error);
});
