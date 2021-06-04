Detailed report: https://clusterfuzz.com/testcase?key=4563349668102144

Fuzzer: ochang_js_fuzzer
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  op->IsAnyLocationOperand() in instruction.h
  cast
  ToRegister
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=50568:50569

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=4563349668102144

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.