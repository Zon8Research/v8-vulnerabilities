Detailed report: https://clusterfuzz.com/testcase?key=5658215440973824

Fuzzer: ochang_js_fuzzer
Job Type: linux_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  *p != to_check_ in heap.cc
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_d8_dbg&range=55002:55003

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5658215440973824

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.