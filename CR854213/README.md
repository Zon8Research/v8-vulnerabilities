Detailed report: https://clusterfuzz.com/testcase?key=6319065615040512

Fuzzer: mbarbella_js_mutation
Job Type: mac_asan_d8_dbg
Platform Id: mac

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  var < ParameterCount() in scope-info.cc
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=mac_asan_d8_dbg&range=53822:53823

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6319065615040512

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.