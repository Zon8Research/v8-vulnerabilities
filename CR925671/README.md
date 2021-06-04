Detailed report: https://clusterfuzz.com/testcase?key=5689977077891072

Fuzzer: inferno_js_fuzzer
Job Type: mac_asan_d8_dbg
Platform Id: mac

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  0 < outstanding_tiering_units_ in module-compiler.cc
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=mac_asan_d8_dbg&range=58546:58547

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5689977077891072

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for instructions to reproduce this bug locally.