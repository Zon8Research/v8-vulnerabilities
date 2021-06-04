Detailed report: https://clusterfuzz.com/testcase?key=4779895258611712

Fuzzer: ochang_js_fuzzer
Job Type: linux_d8_dbg
Platform Id: linux

Crash Type: CHECK failure
Crash Address: 
Crash State:
  arg_elements == isolate->heap()->empty_fixed_array() in objects-debug.cc
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_d8_dbg&range=49981:49982

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=4779895258611712

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.