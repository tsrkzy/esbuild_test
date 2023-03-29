// src/modules/synchronous.js
var Synchronous = class {
  constructor() {
  }
  hello() {
    console.log("Order and Justice.");
  }
};

// src/entrypoints/import_Sync.js
main();
async function main() {
  const s = new Synchronous();
  s.hello();
}
