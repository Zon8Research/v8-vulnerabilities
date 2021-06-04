Detailed report: https://clusterfuzz.com/testcase?key=5569121000620032

Fuzzer: ochang_js_fuzzer
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  *code->owner()->compiled_module()->owning_instance() == codemap()->instance() in
  v8::internal::wasm::ThreadImpl::CallWasmCode
  CallIndirectFunction
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=49947:49948

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5569121000620032

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.