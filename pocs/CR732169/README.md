Detailed report: https://clusterfuzz.com/testcase?key=5858264175869952

Fuzzer: inferno_js_fuzzer_c
Job Type: linux_asan_d8_v8_arm64_dbg
Platform Id: linux

Crash Type: Ill
Crash Address: 0x7ff6a46242e8
Crash State:
  v8::internal::TranslatedState::MaterializeCapturedObjectAt
  v8::internal::TranslatedState::MaterializeAt
  MaterializeObjectAt
  
Sanitizer: address (ASAN)

Regressed: V8: 45514:45515

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5858264175869952


Issue filed automatically.

See https://dev.chromium.org/Home/chromium-security/bugs/reproducing-clusterfuzz-bugs for more information.