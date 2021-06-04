Detailed report: https://clusterfuzz.com/testcase?key=6554469105139712

Fuzzer: inferno_js_fuzzer
Job Type: linux_msan_d8
Platform Id: linux

Crash Type: Use-of-uninitialized-value
Crash Address: 
Crash State:
  v8::internal::WasmSharedModuleData::is_asm_js
  v8::internal::Isolate::CaptureSimpleStackTrace
  v8::internal::Isolate::CaptureAndSetSimpleStackTrace
  
Sanitizer: memory (MSAN)

Recommended Security Severity: Medium

Regressed: https://clusterfuzz.com/revisions?job=linux_msan_d8&range=485247:485257

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6554469105139712


Issue filed automatically.

See https://dev.chromium.org/Home/chromium-security/bugs/reproducing-clusterfuzz-bugs for more information.