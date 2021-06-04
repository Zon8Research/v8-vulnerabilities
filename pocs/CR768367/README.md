Detailed report: https://clusterfuzz.com/testcase?key=6561710013153280

Fuzzer: inferno_js_fuzzer
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  kMaxUInt32 != index_ in lookup.h
  v8::internal::LookupIterator::LookupIterator
  LookupIterator
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=48130:48131

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6561710013153280

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.