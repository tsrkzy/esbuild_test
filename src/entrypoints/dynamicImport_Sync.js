main();

async function main() {
  const { Synchronous } = await import("../modules/synchronous.js");
  const s = new Synchronous();
  s.hello();
}
