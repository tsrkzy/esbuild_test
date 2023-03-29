// src/entrypoints/indexAsyncLazy.js
console.log("indexAsyncLazy.");
main();
async function main() {
  let modPath = "modules/async_mod.js";
  const { Asynchronous } = await import(modPath);
  const s = new Asynchronous();
  s.hello();
}
