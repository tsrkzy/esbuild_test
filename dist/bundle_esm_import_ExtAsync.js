// ext_mod/index.js
await asyncFn();
async function asyncFn() {
  return new Promise((resolve) => {
    console.log("\u30ED\u30FC\u30C9\u4E2D\u3067\u3059");
    setTimeout(() => {
      console.log("  \u30ED\u30FC\u30C9\u5B8C\u4E86\uFF01");
      resolve();
    }, 500);
  });
}
var AsyncMod = class {
  constructor() {
  }
  hello() {
    console.log("\u3044\u3064\u3067\u3082\u547C\u3093\u3067\u304F\u3060\u3055\u3044\u3002");
  }
};

// src/entrypoints/import_ExtAsync.js
main();
async function main() {
  const a = new AsyncMod();
  a.hello();
}
