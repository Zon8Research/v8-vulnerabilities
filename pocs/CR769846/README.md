Detailed report: https://clusterfuzz.com/testcase?key=5229524169261056

Fuzzer: mbarbella_js_mutation
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  !IsThreadInWasm() in trap-handler.h
  SetThreadInWasm
  __RT_impl_Runtime_SetThreadInWasm
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=48148:48149

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5229524169261056

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.