Detailed report: https://clusterfuzz.com/testcase?key=5758781266984960

Fuzzer: ochang_js_fuzzer
Job Type: linux_d8_dbg
Platform Id: linux

Crash Type: CHECK failure
Crash Address: 
Crash State:
  (value & uint64_t{ADDRESS}) != unexpected || (value & uint64_t{ADDRESS}) == uint
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_d8_dbg&range=59308:59309

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5758781266984960

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for instructions to reproduce this bug locally.