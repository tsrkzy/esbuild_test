// src/modules/asynchronous.js
await asyncFn();
async function asyncFn() {
  return new Promise((resolve) => {
    console.log("initial loading...");
    setTimeout(() => {
      console.log("  loading complete!");
      resolve();
    }, 500);
  });
}
var Asynchronous = class {
  constructor() {
  }
  hello() {
    console.log("Call me anytime.");
  }
};

// src/entrypoints/import_Async.js
main();
async function main() {
  const a = new Asynchronous();
  a.hello();
}
