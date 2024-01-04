import {
  MinaNFT,
  MapData,
  MinaNFTNameService,
  MINANFT_NAME_SERVICE,
  accountBalanceMina,
  makeString,
  api,
} from "minanft";
import { PrivateKey, PublicKey, Poseidon, Signature } from "o1js";
import { PINATA_JWT, DEPLOYER, JWT } from "./env.json";

async function main() {
  const keys = MinaNFT.minaInit("testworld2");
  const deployer = keys ? keys[0].privateKey : PrivateKey.fromBase58(DEPLOYER);

  const ownerPrivateKey = PrivateKey.random();
  const ownerPublicKey = ownerPrivateKey.toPublicKey();
  const nftPrivateKey = PrivateKey.random();
  const nftPublicKey = nftPrivateKey.toPublicKey();
  const owner = Poseidon.hash(ownerPublicKey.toFields());
  const pinataJWT = PINATA_JWT; // use "" to not pin on local network
  const name = "@test_" + makeString(10);

  console.log(
    `Deployer balance: ${await accountBalanceMina(deployer.toPublicKey())}`
  );

  const nft = new MinaNFT({ name, owner, address: nftPublicKey });

  nft.updateText({
    key: `description`,
    text: "This is my long description of the NFT @test. Can be of any length, supports **markdown**.",
  });
  nft.update({ key: `twitter`, value: `@test` });
  nft.update({ key: `secret`, value: `mysecretvalue`, isPrivate: true });

  /*
  await nft.updateImage({
    filename: "./images/sunnyday.png",
    pinataJWT,
  });

  const map = new MapData();
  map.update({ key: `level2-1`, value: `value21` });
  map.update({ key: `level2-2`, value: `value22` });
  map.updateText({
    key: `level2-3`,
    text: `This is text on level 2. Can be very long`,
  });

  await map.updateFile({
    key: "woman",
    filename: "./images/woman.png",
    pinataJWT,
  });

  const mapLevel3 = new MapData();
  mapLevel3.update({ key: `level3-1`, value: `value31` });
  mapLevel3.update({ key: `level3-2`, value: `value32`, isPrivate: true });
  mapLevel3.update({ key: `level3-3`, value: `value33` });
  map.updateMap({ key: `level2-4`, map: mapLevel3 });
  nft.updateMap({ key: `level 2 and 3 data`, map });
  */

  console.log(`json:`, JSON.stringify(nft.toJSON(), null, 2));

  const nameService = new MinaNFTNameService({
    address: PublicKey.fromBase58(MINANFT_NAME_SERVICE),
  });

  /* 
  // Deploy name service on local network
  const oraclePrivateKey = PrivateKey.random();
  const nameService = new MinaNFTNameService({oraclePrivateKey});
  let tx = await nameService.deploy(deployer);
  if (tx === undefined) {
    throw new Error("Deploy failed");
  }
  await MinaNFT.wait(tx);
  */

  // Register name
  const minanft = new api(JWT);
  const reserved = await minanft.reserveName({
    name,
    publicKey: nftPublicKey.toBase58(),
  });
  console.log("Reserved:", reserved);
  if (
    !reserved.success ||
    !reserved.isReserved ||
    reserved.signature === undefined
  ) {
    throw new Error("Name not reserved");
  }
  const signature: Signature = Signature.fromBase58(reserved.signature);

  console.log("Compiling...");
  await MinaNFT.compile();
  console.log("Deploying...");
  const tx = await nft.mint({
    deployer,
    owner,
    pinataJWT,
    nameService,
    signature,
    privateKey: nftPrivateKey,
  });
  if (tx === undefined) {
    throw new Error("Mint failed");
  }
  console.log("Waiting for transaction to be included in a block...");
  console.time("Transaction included in a block");
  await MinaNFT.wait(tx);
  console.timeEnd("Transaction included in a block");

  const indexed = await minanft.indexName({ name });
  console.log("Indexed:", indexed);
}

main().catch((error) => {
  console.error(error);
});
