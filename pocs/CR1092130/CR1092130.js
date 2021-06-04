// Copyright 2020 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --wasm-staging

load('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addMemory(16, 32, false, true);
builder.addGlobal(kWasmI32, 1);
builder.addGlobal(kWasmI32, 1);
builder.addGlobal(kWasmF32, 1);
builder.addGlobal(kWasmI32, 1);
builder.addType(makeSig([kWasmI32, kWasmI32, kWasmI32], [kWasmI32]));
builder.addType(makeSig([], [kWasmF64, kWasmI32, kWasmF64, kWasmF32, kWasmI32]));
builder.addType(makeSig([kWasmF64, kWasmI32, kWasmF64, kWasmF32, kWasmI32, kWasmI32, kWasmF32, kWasmF32, kWasmI32, kWasmI32, kWasmI32, kWasmI64, kWasmI64, kWasmF32, kWasmI32], []));
// Generate function 1 (out of 1).
builder.addFunction(undefined, 0 /* sig */)
  .addLocals({i32_count: 4})
  .addBodyWithEnd([
// signature: i_iii
// body:
kExprI32Const, 0x00,  // i32.const
kExprLocalTee, 0x00,  // local.tee
kExprI32Const, 0x00,  // i32.const
kExprIf, kWasmStmt,  // if @9
  kExprI32Const, 0x00,  // i32.const
  kExprI64Const, 0x00,  // i64.const
  kExprI64StoreMem32, 0x00, 0x01,  // i64.store32
  kExprBr, 0x00,  // br depth=0
  kExprBlock, 0x01,  // block @20 f64 i32 f64 f32 i32
    kExprF64Const, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  // f64.const
    kExprI32Const, 0x00,  // i32.const
    kExprF64Const, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  // f64.const
    kExprF32Const, 0x00, 0x00, 0x00, 0x00,  // f32.const
    kExprI32Const, 0x00,  // i32.const
    kExprEnd,  // end @49
  kExprI32Const, 0x00,  // i32.const
  kExprF32Const, 0x00, 0x00, 0x00, 0x00,  // f32.const
  kExprF32Const, 0x00, 0x00, 0x00, 0x00,  // f32.const
  kExprI32Const, 0x00,  // i32.const
  kExprI32Const, 0x00,  // i32.const
  kExprI32Const, 0x00,  // i32.const
  kExprI64Const, 0x00,  // i64.const
  kExprI64Const, 0x00,  // i64.const
  kExprF32Const, 0x00, 0x00, 0x00, 0x00,  // f32.const
  kExprI32Const, 0x00,  // i32.const
  kExprBlock, 0x02,  // block @79
    kExprDrop,  // drop
    kExprDrop,  // drop
    kExprDrop,  // drop
    kExprDrop,  // drop
    kExprDrop,  // drop
    kExprDrop,  // drop
    kExprDrop,  // drop
    kExprDrop,  // drop
    kExprDrop,  // drop
    kExprDrop,  // drop
    kExprDrop,  // drop
    kExprDrop,  // drop
    kExprDrop,  // drop
    kExprDrop,  // drop
    kExprDrop,  // drop
    kExprEnd,  // end @96
kExprElse,  // else @97
  kExprEnd,  // end @98
kExprEnd,  // end @99
]);
builder.addExport('main', 0);
const instance = builder.instantiate();
print(instance.exports.main(1, 2, 3));
