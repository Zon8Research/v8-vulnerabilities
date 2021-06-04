Detailed report: https://clusterfuzz.com/testcase?key=5658570541236224

Fuzzer: mbarbella_js_mutation
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  is_wasm_memory == GetIsolate()->wasm_engine()->memory_tracker()->IsWasmMemory( b
  v8::internal::JSArrayBuffer::is_wasm_memory
  v8::ArrayBuffer::GetContents
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=52162:52163

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5658570541236224

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.