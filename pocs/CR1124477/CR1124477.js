(function () {
  function executeCode(code) {
    if (typeof code === 'function') return code();
  }
  assertThrows = function assertThrows(code) {
      executeCode(code);
  };
})();
function __isPropertyOfType(obj, name) {
}
function __getProperties(obj, type) {
  let properties = [];
  for (let name of Object.getOwnPropertyNames(obj)) {
 properties.push(name);
  }
  return properties;
}
function* __getObjects(root = this, level = 0) {
  let obj_names = __getProperties(root);
  for (let obj_name of obj_names) {
    yield* __getObjects( + 1);
  }
}
function __getRandomObject() {
  for (let obj of __getObjects()) {
  }
}
function __f_0() {
  try {
 __getRandomObject()(), {
    };
  } catch (__v_28) {}
}
  __f_0();
        var __v_32 = "ff";
        var __v_33 = "0x";
      try {
        for (var __v_34 = 2; __v_34 < 29; __v_34++) {
            __v_32 = __v_32 + __v_32;
            __v_33 += __v_32;
        }
      } catch (e) {}
        assertThrows(() => BigInt(__v_33));