Detailed Report: https://clusterfuzz.com/testcase?key=5722768927424512

Fuzzer: ochang_js_fuzzer
Job Type: linux_msan_d8
Platform Id: linux

Crash Type: Use-of-uninitialized-value
Crash Address: 
Crash State:
  v8::internal::JSDateTimeFormat::New
  v8::internal::JSDateTimeFormat::ToLocaleDateTime
  v8::internal::Builtin_Impl_DatePrototypeToLocaleString
  
Sanitizer: memory (MSAN)

Recommended Security Severity: Medium

Regressed: https://clusterfuzz.com/revisions?job=linux_msan_d8&range=72688:72689

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5722768927424512

Issue filed automatically.

See https://www.chromium.org/developers/testing/memorysanitizer#TOC-Reproducing-ClusterFuzz-Bugs for instructions on reproducing this bug locally.