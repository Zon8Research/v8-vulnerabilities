Detailed Report: https://clusterfuzz.com/testcase?key=5152660337328128

Fuzzer: ochang_js_fuzzer
Job Type: linux_d8_dbg
Platform Id: linux

Crash Type: CHECK failure
Crash Address: 
Crash State:
  !v8::internal::FLAG_enable_slow_asserts || (this->IsStruct()) in class-definitio
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_d8_dbg&range=63423:63425

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5152660337328128

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for instructions to reproduce this bug locally.