#!/usr/bin/env bash

(
  cd $(dirname $0)

  mkdir -p dist

  # エラー起きても処理続行
  set +e

  for f in ./src/entrypoints/*.js; do
    FILENAME=$(basename ${f})
    echo "executing ${FILENAME}..."
    node ${f}
    done
)
