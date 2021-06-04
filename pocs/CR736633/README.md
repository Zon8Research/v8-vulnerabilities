Detailed report: https://clusterfuzz.com/testcase?key=5465207894966272

Fuzzer: inferno_js_fuzzer_c
Job Type: windows_asan_d8
Platform Id: windows

Crash Type: Use-after-poison WRITE 8
Crash Address: 0x0d1248f8
Crash State:
  v8::internal::compiler::InstructionSelector::EmitTableSwitch
  v8::internal::compiler::InstructionSelector::VisitSwitch
  v8::internal::compiler::InstructionSelector::VisitControl
  
Sanitizer: address (ASAN)

Recommended Security Severity: High

Regressed: https://clusterfuzz.com/revisions?job=windows_asan_d8&range=455700:456019

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5465207894966272


Issue filed automatically.

See https://dev.chromium.org/Home/chromium-security/bugs/reproducing-clusterfuzz-bugs for more information.