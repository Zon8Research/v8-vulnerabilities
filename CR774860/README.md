Detailed report: https://clusterfuzz.com/testcase?key=6257093802983424

Fuzzer: ochang_js_fuzzer
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: CHECK failure
Crash Address: 
Crash State:
  map->IsMap() in spaces.cc
  v8::internal::NewSpace::Verify
  v8::internal::Heap::Verify
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=33916:33917

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6257093802983424

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.