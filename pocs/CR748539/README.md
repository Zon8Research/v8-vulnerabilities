Detailed report: https://clusterfuzz.com/testcase?key=5352347554545664

Fuzzer: mbarbella_js_mutation
Job Type: linux_asan_d8
Platform Id: linux

Crash Type: CHECK failure
Crash Address: 
Crash State:
  is_transitionable_fast_elements_kind implies !Map::IsInplaceGeneralizableField(d
  
Sanitizer: address (ASAN)

Regressed: V8: 46853:46854

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5352347554545664


Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.