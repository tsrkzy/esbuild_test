var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/modules/async_mod.js
var async_mod_exports = {};
__export(async_mod_exports, {
  Asynchronous: () => Asynchronous
});
async function asyncFn() {
  return new Promise((resolve) => {
    console.log("initial loading...");
    setTimeout(() => {
      console.log("  loading complete!");
      resolve();
    }, 500);
  });
}
var Asynchronous;
var init_async_mod = __esm({
  async "src/modules/async_mod.js"() {
    await asyncFn();
    Asynchronous = class {
      constructor() {
      }
      hello() {
        console.log("Call me anytime.");
      }
    };
  }
});

// src/entrypoints/indexAsync.js
console.log("indexAsync.");
main();
async function main() {
  const { Asynchronous: Asynchronous2 } = await init_async_mod().then(() => async_mod_exports);
  const s = new Asynchronous2();
  s.hello();
}
