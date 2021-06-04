Detailed report: https://clusterfuzz.com/testcase?key=6221609999532032

Fuzzer: ochang_js_fuzzer
Job Type: linux_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  wasm::WasmCode::kLazyStub == code->kind() in module-compiler.cc
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_d8_dbg&range=49947:49948

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6221609999532032

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.