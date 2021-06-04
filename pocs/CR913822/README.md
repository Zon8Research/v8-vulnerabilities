Detailed report: https://clusterfuzz.com/testcase?key=5425804189892608

Fuzzer: lokihardt_jshitter
Job Type: linux_asan_d8_v8_arm_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  !failed_ in asm-parser.cc
  V8_Dcheck
  v8::internal::wasm::AsmJsParser::ValidateModule
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_v8_arm_dbg&range=48037:48038

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5425804189892608

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.