Detailed report: https://clusterfuzz.com/testcase?key=6713497672220672

Fuzzer: mbarbella_js_mutation
Job Type: linux_asan_d8
Platform Id: linux

Crash Type: CHECK failure
Crash Address: 
Crash State:
  size <= kMaxRegularHeapObjectSize in runtime-internal.cc
  __RT_impl_Runtime_AllocateInNewSpace
  v8::internal::Runtime_AllocateInNewSpace
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8&range=50679:50680

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6713497672220672

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.