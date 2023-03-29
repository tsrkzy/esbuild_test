main();

async function main() {
  let modPath = "../modules/asynchronous.js";
  const { Asynchronous } = await import(modPath);
  const s = new Asynchronous();
  s.hello();
}
