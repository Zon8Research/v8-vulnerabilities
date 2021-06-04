Detailed report: https://clusterfuzz.com/testcase?key=5196296164737024

Fuzzer: ochang_js_fuzzer
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  static_cast<unsigned>(length_) > static_cast<unsigned>(i) in zone.h
  v8::internal::ZoneList<v8::internal::Expression*>::operator
  at
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=51852:51853

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5196296164737024

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.