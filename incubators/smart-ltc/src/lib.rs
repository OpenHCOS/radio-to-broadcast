extern crate serde_json;
extern crate wasm_bindgen;
use wasm_bindgen::prelude::{wasm_bindgen, JsValue};

static mut STATE: &str = "foo";

#[macro_use]
extern crate serde_derive;

#[derive(Serialize, Deserialize)]
pub struct User {
    name: String,
    balance: i32,
}

#[wasm_bindgen]
pub fn set_jsvalue(js_objects: &JsValue) -> usize {
    unsafe { STATE = "測試" }
    // https://github.com/rustwasm/wasm-bindgen/blob/9ebbcd382742f3c078f49a7aec9e252b28987991/src/lib.rs#L205
    let users: Vec<User> = js_objects.into_serde().unwrap();
    users.len()
}

#[wasm_bindgen]
pub fn foo() -> i32 {
    101
}

#[wasm_bindgen]
pub fn get_jsvalue() -> JsValue {
    let user = User {
        name: String::from("中文試"),
        balance: 189,
    };

    let users = vec![user];
    JsValue::from_serde(&users).unwrap()
}
