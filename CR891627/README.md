Detailed report: https://clusterfuzz.com/testcase?key=5754592074399744

Fuzzer: mbarbella_js_mutation
Job Type: mac_asan_d8_dbg
Platform Id: mac

Crash Type: CHECK failure
Crash Address: 
Crash State:
  NumberModulus of kRepWord32 ((MinusZero | Range(-1, 0))) cannot be changed to kR
  v8::internal::compiler::RepresentationChanger::TypeError
  v8::internal::compiler::RepresentationChanger::GetFloat64RepresentationFor
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=mac_asan_d8_dbg&range=56324:56325

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5754592074399744

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.