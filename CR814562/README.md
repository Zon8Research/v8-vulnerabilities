Detailed report: https://clusterfuzz.com/testcase?key=6079628364742656

Fuzzer: ochang_js_fuzzer
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  code->owner()->compiled_module()->owning_instance() == codemap()->instance() in 
  v8::internal::wasm::ThreadImpl::CallWasmCode
  CallIndirectFunction
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=51426:51427

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6079628364742656

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.