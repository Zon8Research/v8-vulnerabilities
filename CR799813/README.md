Detailed report: https://clusterfuzz.com/testcase?key=5801114682523648

Fuzzer: ochang_js_fuzzer
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  index >= 0 && index < length() in string-inl.h
  v8::internal::String::Get
  v8::internal::RegExpUtils::AdvanceStringIndex
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=41855:41856

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5801114682523648

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.