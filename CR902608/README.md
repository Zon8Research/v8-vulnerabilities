Detailed report: https://clusterfuzz.com/testcase?key=5639961371738112

Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: UNKNOWN READ
Crash Address: 0x60bb9b9ba5e0
Crash State:
  GetValueByObjectIndex
  v8::internal::TranslatedState::ResolveCapturedObject
  v8::internal::TranslatedState::EnsureObjectAllocatedAt
  
Sanitizer: address (ASAN)

Recommended Security Severity: Medium

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=56553:56554

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5639961371738112

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.