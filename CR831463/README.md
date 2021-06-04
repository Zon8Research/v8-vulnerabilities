Detailed report: https://clusterfuzz.com/testcase?key=6255627408769024

Fuzzer: ochang_js_fuzzer
Job Type: linux_d8_dbg
Platform Id: linux

Crash Type: CHECK failure
Crash Address: 
Crash State:
  !v8::internal::FLAG_enable_slow_asserts || (object->IsWasmInstanceObject()) in w
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_d8_dbg&range=52530:52531

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6255627408769024

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.