Detailed report: https://clusterfuzz.com/testcase?key=4793137380458496

Fuzzer: ochang_js_fuzzer
Job Type: linux_d8_dbg
Platform Id: linux

Crash Type: CHECK failure
Crash Address: 
Crash State:
  start_position == start_position_from_data in preparsed-scope-data.cc
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_d8_dbg&range=56847:56848

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=4793137380458496

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.