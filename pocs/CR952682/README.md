Detailed report: https://clusterfuzz.com/testcase?key=5735158666362880

Fuzzer: mbarbella_js_mutation
Job Type: mac_asan_d8_dbg
Platform Id: mac

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  value->IsSmi() in objects-debug.cc
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=mac_asan_d8_dbg&range=60763:60764

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5735158666362880

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for instructions to reproduce this bug locally.