Detailed report: https://clusterfuzz.com/testcase?key=6033054794776576

Fuzzer: ochang_js_fuzzer
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  map() != GetHeap()->fixed_cow_array_map() in fixed-array-inl.h
  v8::internal::FixedArray::set
  SetImpl
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=50679:50680

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6033054794776576

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.