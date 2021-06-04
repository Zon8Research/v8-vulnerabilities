Detailed report: https://clusterfuzz.com/testcase?key=5225771252842496

Fuzzer: inferno_js_fuzzer
Job Type: linux_asan_d8_v8_arm_dbg
Platform Id: linux

Crash Type: CHECK failure
Crash Address: 
Crash State:
  !IsSmi() == Internals::HasHeapObjectTag(this) in objects.h
  v8::internal::compiler::CodeGenerator::AssembleArchInstruction
  v8::internal::compiler::CodeGenerator::AssembleInstruction
  
Sanitizer: address (ASAN)

Regressed: V8: 45879:45880

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5225771252842496


Issue filed automatically.

See https://dev.chromium.org/Home/chromium-security/bugs/reproducing-clusterfuzz-bugs for more information.