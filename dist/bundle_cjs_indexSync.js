var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/modules/sync_mod.js
var sync_mod_exports = {};
__export(sync_mod_exports, {
  Sync_mod: () => Sync_mod
});
var Sync_mod;
var init_sync_mod = __esm({
  "src/modules/sync_mod.js"() {
    Sync_mod = class {
      constructor() {
      }
      hello() {
        console.log("Order and Justice.");
      }
    };
  }
});

// src/entrypoints/indexSync.js
console.log("indexSync.");
main();
async function main() {
  const { Sync_mod: Sync_mod2 } = await Promise.resolve().then(() => (init_sync_mod(), sync_mod_exports));
  const s = new Sync_mod2();
  s.hello();
}
