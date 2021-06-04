Detailed report: https://clusterfuzz.com/testcase?key=5525304222416896

Fuzzer: ochang_js_fuzzer
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  array->map() != fixed_cow_array_map() in heap.cc
  v8::internal::Heap::MoveElements
  v8::internal::FastElementsAccessor<v8::internal::FastPackedObjectElementsAccesso
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=48623:48624

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5525304222416896

Issue manually filed by: titzer

See https://github.com/google/clusterfuzz-tools for more information.