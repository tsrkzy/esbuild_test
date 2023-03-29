main();

async function main() {
  const { Asynchronous } = await import("../modules/asynchronous.js");
  const s = new Asynchronous();
  s.hello();
}
