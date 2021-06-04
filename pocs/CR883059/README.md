Detailed report: https://clusterfuzz.com/testcase?key=6343972077961216

Fuzzer: mbarbella_js_mutation
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  is_resolved() in ast.h
  var
  VisitVariableProxy
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=55800:55801

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6343972077961216

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.