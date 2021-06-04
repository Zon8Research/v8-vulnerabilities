Detailed report: https://clusterfuzz.com/testcase?key=6587417334382592

Fuzzer: inferno_js_fuzzer_c
Job Type: linux_asan_d8_v8_arm_dbg
Platform Id: linux

Crash Type: UNKNOWN READ
Crash Address: 0xffffffff
Crash State:
  v8::internal::Simulator::DecodeType2
  v8::internal::Simulator::InstructionDecode
  v8::internal::Simulator::CallInternal
  
Sanitizer: address (ASAN)

Recommended Security Severity: Medium

Regressed: V8: 41533:41534

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6587417334382592


Issue manually filed by: ishell

See https://dev.chromium.org/Home/chromium-security/bugs/reproducing-clusterfuzz-bugs for more information.