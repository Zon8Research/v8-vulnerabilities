Detailed report: https://clusterfuzz.com/testcase?key=5861285750898688

Fuzzer: ochang_js_fuzzer
Job Type: linux_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  index >= 0 in escape-analysis.cc
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_d8_dbg&range=56441:56442

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5861285750898688

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.