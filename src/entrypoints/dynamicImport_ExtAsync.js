main();

async function main() {
  const { AsyncMod } = await import("ext_mod");
  const s = new AsyncMod();
  s.hello();
}
