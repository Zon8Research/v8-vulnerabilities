Detailed report: https://clusterfuzz.com/testcase?key=6169570892316672

Fuzzer: ochang_js_fuzzer
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  new_len >= old_len in heap.cc
  v8::internal::AllocationResult v8::internal::Heap::CopyArrayAndGrow<v8::internal
  v8::internal::Factory::CopyFixedArrayAndGrow
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=47138:47139

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6169570892316672

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.