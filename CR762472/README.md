Detailed report: https://clusterfuzz.com/testcase?key=5564879745581056

Fuzzer: mbarbella_js_mutation
Job Type: mac_asan_d8_dbg
Platform Id: mac

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  !isolate->has_pending_exception() in asm-js.cc
  v8::internal::AsmJs::InstantiateAsmWasm
  v8::internal::__RT_impl_Runtime_InstantiateAsmJs
  
Sanitizer: address (ASAN)

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5564879745581056

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.