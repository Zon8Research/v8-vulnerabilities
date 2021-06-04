Detailed report: https://clusterfuzz.com/testcase?key=5662345442099200

Fuzzer: ochang_js_fuzzer
Job Type: linux_d8_dbg
Platform Id: linux

Crash Type: CHECK failure
Crash Address: 
Crash State:
  !maybe_skeleton.FromJust().empty() in js-date-time-format.cc
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_d8_dbg&range=55624:55625

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5662345442099200

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.