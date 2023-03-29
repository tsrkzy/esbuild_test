import { Synchronous } from "../modules/synchronous.js";

main();

async function main() {
  const s = new Synchronous();
  s.hello();
}