
await asyncFn();

async function  asyncFn(){
  return new Promise(resolve => {
    console.log("initial loading...");
    setTimeout(() => {
      console.log("  loading complete!");
      resolve();
    },500)
  })
}


export class Asynchronous {
  constructor() {  }
  hello(){
    console.log("Call me anytime.");
  }
}