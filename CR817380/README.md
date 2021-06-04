Detailed report: https://clusterfuzz.com/testcase?key=5382082893971456

Fuzzer: ochang_js_fuzzer
Job Type: linux_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  code->kind() == wasm::WasmCode::kFunction || code->kind() == wasm::WasmCode::kWa
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_d8_dbg&range=51199:51200

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5382082893971456

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.