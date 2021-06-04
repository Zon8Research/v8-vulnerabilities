Detailed report: https://clusterfuzz.com/testcase?key=5144730831945728

Fuzzer: inferno_js_fuzzer
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  AllowHeapAllocation::IsAllowed() in heap-inl.h
  v8::internal::Heap::AllocateRaw
  v8::internal::Heap::Allocate
  
Sanitizer: address (ASAN)

Regressed: V8: 47213:47214

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5144730831945728

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.