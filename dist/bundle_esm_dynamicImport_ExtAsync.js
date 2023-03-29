var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// ext_mod/index.js
var ext_mod_exports = {};
__export(ext_mod_exports, {
  AsyncMod: () => AsyncMod
});
async function asyncFn() {
  return new Promise((resolve) => {
    console.log("\u30ED\u30FC\u30C9\u4E2D\u3067\u3059");
    setTimeout(() => {
      console.log("  \u30ED\u30FC\u30C9\u5B8C\u4E86\uFF01");
      resolve();
    }, 500);
  });
}
var AsyncMod;
var init_ext_mod = __esm({
  async "ext_mod/index.js"() {
    await asyncFn();
    AsyncMod = class {
      constructor() {
      }
      hello() {
        console.log("\u3044\u3064\u3067\u3082\u547C\u3093\u3067\u304F\u3060\u3055\u3044\u3002");
      }
    };
  }
});

// src/entrypoints/dynamicImport_ExtAsync.js
main();
async function main() {
  const { AsyncMod: AsyncMod2 } = await init_ext_mod().then(() => ext_mod_exports);
  const s = new AsyncMod2();
  s.hello();
}
