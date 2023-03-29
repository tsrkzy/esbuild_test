main();

async function main() {
  let modPath = "ext_mod";
  const { AsyncMod } = await import(modPath);
  const s = new AsyncMod();
  s.hello();
}
