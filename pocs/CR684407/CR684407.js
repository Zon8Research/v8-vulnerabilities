// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

load("test/mjsunit/wasm/wasm-constants.js");
load("test/mjsunit/wasm/wasm-module-builder.js");

(function() {
  var builder = new WasmModuleBuilder();
  builder.addMemory(16, 32, false);
  builder.addFunction("test", kSig_i_iii)
    .addBodyWithEnd([
// body: 
kExprGetLocal, 0x00,
kExprGrowMemory, 0x00,
kExprGetLocal, 0x00,
kExprGrowMemory, 0x00,
kExprGetLocal, 0x01,
kExprGrowMemory, 0x00,
kExprGetLocal, 0x01,
kExprGrowMemory, 0x00,
kExprGetLocal, 0x00,
kExprGrowMemory, 0x00,
kExprGetLocal, 0x01,
kExprGrowMemory, 0x00,
kExprGetLocal, 0x01,
kExprGrowMemory, 0x00,
kExprGetLocal, 0x00,
kExprGrowMemory, 0x00,
kExprGetLocal, 0x00,
kExprGrowMemory, 0x00,
kExprGetLocal, 0x01,
kExprGrowMemory, 0x00,
kExprI32StoreMem16, 0x00, 0xff, 0xff, 0x3f,
kExprUnreachable,
kExprEnd,   // @90
            ])
            .exportFunc();
  var module = builder.instantiate();
  module.exports.test(1, 2, 3);
})();
