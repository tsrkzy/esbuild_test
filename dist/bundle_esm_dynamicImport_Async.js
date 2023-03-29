var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/modules/asynchronous.js
var asynchronous_exports = {};
__export(asynchronous_exports, {
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
var init_asynchronous = __esm({
  async "src/modules/asynchronous.js"() {
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

// src/entrypoints/dynamicImport_Async.js
main();

async function main() {
  const { Asynchronous: Asynchronous2 } = await init_asynchronous().then(() => asynchronous_exports);
  const s = new Asynchronous2();
  s.hello();
}
