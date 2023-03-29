#!/usr/bin/env bash

(
  cd $(dirname $0)

  # 出力先を掃除
  rm -rf dist
  mkdir dist

  # エラー起きても処理続行
  set +e

  # 使用するformat
  formats=('cjs' 'esm')

  for f in ./src/entrypoints/*.js; do
    for fmt in "${formats[@]}"; do
      FILENAME="$(basename ${f})"
      echo " - bundling \"${FILENAME}\" as [${fmt}]"

      # 出力はエラーのみに絞ってesbuildでバンドル
      "$(npm bin)"/esbuild ${f} \
        --bundle \
        --outfile='dist/bundle_'${fmt}'_'${FILENAME} \
        --format=${fmt} \
        --log-level=error
    done
  done
)
