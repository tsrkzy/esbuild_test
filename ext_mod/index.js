
await asyncFn();

async function  asyncFn(){
  return new Promise(resolve => {
    console.log("ロード中です");
    setTimeout(() => {
      console.log("  ロード完了！");
      resolve();
    },500)
  })
}


export class AsyncMod {
  constructor() {  }
  hello(){
    console.log("いつでも呼んでください。");
  }
}