# セットアップ

```shell
npm i
```

# 実行

```shell
# esbuildでバンドル
sh ./bundle.sh

# バンドルしたファイルの実行
sh ./exec_dist.sh
```

# 結果

top-level await を利用したモジュールをimportする場合については、

1. `cjs`スタイルでバンドルする場合、`lazy import` かつ `package.json` 経由で名前解決する場合`#17`のみ可能
2. `esm`スタイルでバンドルする場合、`lazy import` かつ `package.json` を名前解決に用いない場合`#14`のみNG


| #   | top-level await | format | import type      | bundle        | entrypoint                     |
|-----|-----------------|--------|------------------|---------------|--------------------------------|
| 1   | -               | `cjs`  | -                |               | noImport.js                    |
| 2   | -               | `esm`  | -                |               | noImport.js                    |
| 3   | false           | `cjs`  | `static import`  |               | import_Sync.js                 |
| 4   | false           | `esm`  | `static import`  |               | import_Sync.js                 |
| 5   | false           | `cjs`  | `dynamic import` |               | dynamicImport_Sync.js          |
| 6   | false           | `esm`  | `dynamic import` |               | dynamicImport_Sync.js          |
| 7   | true            | `cjs`  | `static import`  | NG            | import_Async.js                |
| 8   | true            | `esm`  | `static import`  |               | import_Async.js                |
| 9   | true            | `cjs`  | `static import`  | NG            | import_ExtAsync.js             |
| 10  | true            | `esm`  | `static import`  |               | import_ExtAsync.js             |
| 11  | true            | `cjs`  | `dynamic import` | NG            | dynamicImport_Async.js         |
| 12  | true            | `esm`  | `dynamic import` |               | dynamicImport_Async.js         |
| 13  | true            | `cjs`  | `lazy import`    | RUNTIME_ERROR | dynamicImport_Async_Lazy.js    |
| 14  | true            | `esm`  | `lazy import`    | RUNTIME_ERROR | dynamicImport_Async_Lazy.js    |
| 15  | true            | `cjs`  | `dynamic import` | NG            | dynamicImport_ExtAsync.js      |
| 16  | true            | `esm`  | `dynamic import` |               | dynamicImport_ExtAsync.js      |
| 17  | true            | `cjs`  | `lazy import`    |               | dynamicImport_ExtAsync_Lazy.js |
| 18  | true            | `esm`  | `lazy import`    |               | dynamicImport_ExtAsync_Lazy.js |

## import type

| type           | bundle.js がモジュールのコードを | モジュールファイルが実行されるタイミング   |
|----------------|-----------------------|------------------------|
| static import  | 含む                    | bundle.js実行と同時         |
| dynamic import | 含む                    | `await import()`の呼出と同時 |
| lazy import    | 含まない                  | `await import()`の呼出と同時 |



### static import

```javascript
import { Foo } from 'bar';
import { Cat } from './cat.js';
```

### dynamic import

```javascript
const { Foo } = await import ('bar');
```

### lazy import

```javascript
const path = 'bar';
const { Foo } = await import (path);
```

## bundle

## NG
```
✘ [ERROR] Top-level await is currently not supported with the "cjs" output format
```


### RUNTIME_ERROR

`lazy import` では、バンドルファイルはモジュールのソースコードを含まない。   
`await import()` の呼出と同時に、パスを参照してモジュールファイルを探す。   
そのため、バンドル先でも、バンドル元と同じパスでモジュールファイルにたどり着けない場合はエラーになる。


```
Error [ERR_MODULE_NOT_FOUND]: Cannot find module '/Users/tsrkzy/dev/esbuild_test/modules/asynchronous.js' imported from /Users/tsrkzy/dev/esbuild_test/dist/bundle_cjs_dynamicImport_Async_Lazy.js
    at new NodeError (node:internal/errors:371:5)
    at finalizeResolution (node:internal/modules/esm/resolve:418:11)
    at moduleResolve (node:internal/modules/esm/resolve:983:10)
    at defaultResolve (node:internal/modules/esm/resolve:1080:11)
    at ESMLoader.resolve (node:internal/modules/esm/loader:530:30)
    at ESMLoader.getModuleJob (node:internal/modules/esm/loader:251:18)
    at ESMLoader.import (node:internal/modules/esm/loader:332:22)
    at importModuleDynamically (node:internal/modules/esm/translators:106:35)
    at importModuleDynamicallyCallback (node:internal/process/esm_loader:35:14)
    at main (file:///Users/tsrkzy/dev/esbuild_test/dist/bundle_cjs_dynamicImport_Async_Lazy.js:5:28) {
  code: 'ERR_MODULE_NOT_FOUND'
}
```