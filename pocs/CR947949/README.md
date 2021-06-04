Detailed report: https://clusterfuzz.com/testcase?key=5729001317466112

Fuzzer: ochang_js_fuzzer
Job Type: linux_d8_dbg
Platform Id: linux

Crash Type: CHECK failure
Crash Address: 
Crash State:
  this->first()->length() > 0 in objects-debug.cc
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_d8_dbg&range=60317:60318

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5729001317466112

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for instructions to reproduce this bug locally.