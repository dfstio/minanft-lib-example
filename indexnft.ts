import { api } from "minanft";
import { JWT } from "./env.json";

async function main() {
  const name = "@test_jdumgtwcwu";
  const minanft = new api(JWT);
  const indexed = await minanft.indexName({ name });
  console.log("Indexed:", indexed);
}

main().catch((error) => {
  console.error(error);
});
