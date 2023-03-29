#!/usr/bin/env bash

(
  cd $(dirname $0)

  mkdir -p dist

  # エラー起きても処理続行
  set +e

  for f in ./dist/*.js; do
    FILENAME=$(basename ${f})
    echo "executing ${FILENAME}..."

    # エラー出力以外無視して実行
#    node ${f} > /dev/null
    node ${f}
    done
)
