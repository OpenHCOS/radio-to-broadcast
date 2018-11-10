#!/bin/bash
#set -x

cd "$(dirname "$0")"
WASM_FILE="smart_ltc.wasm"
BINDGEN_DIR="bindout"

init-rust() {
    rustup target add wasm32-unknown-unknown --toolchain nightly
    rustup default nightly
    cargo +nightly install wasm-bindgen-cli
}

server() {
    # wasm mimetype is not supported by the lite-server command
    npm run serve
}

build(){
    mkdir -p ${BINDGEN_DIR}
    cargo  +nightly build --target wasm32-unknown-unknown
    wasm-bindgen target/wasm32-unknown-unknown/debug/${WASM_FILE} --out-dir ./${BINDGEN_DIR}
}

case "$1" in 
    init)   init-rust ;;
    build)   build ;;
    *) echo "usage: $0 start|stop|restart" >&2
       exit 1
       ;;
esac
