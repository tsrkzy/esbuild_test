console.log("indexSync.");

main();

async function main() {
  const { Sync_mod } = await import("../modules/sync_mod.js");
  const s = new Sync_mod();
  s.hello();
}
