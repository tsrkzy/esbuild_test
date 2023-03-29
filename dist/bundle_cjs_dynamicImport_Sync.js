var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/modules/synchronous.js
var synchronous_exports = {};
__export(synchronous_exports, {
  Synchronous: () => Synchronous
});
var Synchronous;
var init_synchronous = __esm({
  "src/modules/synchronous.js"() {
    Synchronous = class {
      constructor() {
      }
      hello() {
        console.log("Order and Justice.");
      }
    };
  }
});

// src/entrypoints/dynamicImport_Sync.js
main();
async function main() {
  const { Synchronous: Synchronous2 } = await Promise.resolve().then(() => (init_synchronous(), synchronous_exports));
  const s = new Synchronous2();
  s.hello();
}
