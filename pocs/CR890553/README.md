Detailed report: https://clusterfuzz.com/testcase?key=5153368765628416

Fuzzer: mbarbella_js_mutation
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  (function_) == nullptr in scopes.cc
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=56280:56281

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5153368765628416

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.