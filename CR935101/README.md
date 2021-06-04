Detailed report: https://clusterfuzz.com/testcase?key=6211340727353344

Fuzzer: ochang_js_fuzzer
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: CHECK failure
Crash Address: 
Crash State:
  isolate->heap()->Contains(ho) in objects-debug.cc
  v8::internal::HeapObject::VerifyHeapPointer
  v8::internal::FixedArray::FixedArrayVerify
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=59752:59753

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6211340727353344

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for instructions to reproduce this bug locally.