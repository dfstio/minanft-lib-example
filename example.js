const {
  MinaNFT,
  MapData,
  MinaNFTNameService,
  MINANFT_NAME_SERVICE,
  accountBalanceMina,
  makeString,
} = require("minanft");
const { PrivateKey, PublicKey, Poseidon } = require("o1js");
const { DEPLOYER, PINATA_JWT, NAMES_ORACLE_SK } = require("./env.json");

async function main() {
  const keys = MinaNFT.minaInit("local");
  const deployer = keys ? keys[0].privateKey : PrivateKey.fromBase58(DEPLOYER);
  const oraclePrivateKey = PrivateKey.fromBase58(NAMES_ORACLE_SK);
  const nameServiceAddress = PublicKey.fromBase58(MINANFT_NAME_SERVICE);

  const ownerPrivateKey = PrivateKey.random();
  const ownerPublicKey = ownerPrivateKey.toPublicKey();
  const owner = Poseidon.hash(ownerPublicKey.toFields());
  const pinataJWT = PINATA_JWT;

  console.log(
    `Deployer balance: ${await accountBalanceMina(deployer.toPublicKey())}`
  );

  const nft = new MinaNFT({ name: `@test` + makeString(10) });
  nft.updateText({
    key: `description`,
    text: "This is my long description of the NFT. Can be of any length, supports markdown.",
  });
  nft.update({ key: `twitter`, value: `@builder` });
  nft.update({ key: `secret`, value: `mysecretvalue`, isPrivate: true });

  /*
  await nft.updateImage({
    filename: "./images/navigator.jpg",
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
  console.log("Compiling...");
  await MinaNFT.compile();

  const nameService = new MinaNFTNameService({ oraclePrivateKey });
  let tx = await nameService.deploy(deployer);
  if (tx === undefined) {
    throw new Error("Deploy failed");
  }
  await MinaNFT.wait(tx);

  /*
  
  const nameService = new MinaNFTNameService({
    oraclePrivateKey,
    address: nameServiceAddress,
  });
  
  */
  tx = await nft.mint({
    deployer,
    owner,
    pinataJWT,
    nameService,
  });
  if (tx === undefined) {
    throw new Error("Mint failed");
  }
  console.log("Waiting for transaction to be included in a block...");
  console.time("Transaction included in a block");
  await MinaNFT.wait(tx);
  console.timeEnd("Transaction included in a block");
}

main().catch((error) => {
  console.error(error);
});
