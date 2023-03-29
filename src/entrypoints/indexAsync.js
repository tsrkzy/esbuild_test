console.log("indexAsync.");

main();

async function main() {
  const { Asynchronous } = await import("../modules/async_mod.js");
  const s = new Asynchronous();
  s.hello();
}
