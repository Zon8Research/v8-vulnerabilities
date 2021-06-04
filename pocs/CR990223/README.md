Detailed report: https://clusterfuzz.com/testcase?key=6218589445423104

Fuzzer: ochang_js_fuzzer
Job Type: linux_d8_dbg
Platform Id: linux

Crash Type: CHECK failure
Crash Address: 
Crash State:
  status == CompilationJob::SUCCEEDED in function-compiler.cc
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_d8_dbg&range=62401:62402

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6218589445423104

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for instructions to reproduce this bug locally.