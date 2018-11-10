const wasm = import("./smart_ltc");

wasm.then(js => {
    const jsvalue = js.get_jsvalue();
    console.log(JSON.stringify(jsvalue))
    console.log(js.foo())
});