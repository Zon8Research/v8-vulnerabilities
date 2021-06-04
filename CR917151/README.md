Detailed report: https://clusterfuzz.com/testcase?key=5699367375470592

Fuzzer: lokihardt_jshitter
Job Type: linux_asan_d8_v8_arm_dbg
Platform Id: linux

Crash Type: CHECK failure
Crash Address: 
Crash State:
  U_SUCCESS(status) in intl-objects.cc
  v8::internal::Intl::ToLanguageTag
  v8::internal::Intl::CanonicalizeLanguageTag
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_v8_arm_dbg&range=58172:58173

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5699367375470592

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for instructions to reproduce this bug locally.