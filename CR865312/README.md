Detailed report: https://clusterfuzz.com/testcase?key=6021191413006336

Fuzzer: ochang_js_fuzzer
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  end <= array->length_value() in elements.cc
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=54521:54522

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6021191413006336

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.