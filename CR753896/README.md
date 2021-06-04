Detailed report: https://clusterfuzz.com/testcase?key=5521703332741120

Fuzzer: inferno_js_fuzzer_c
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  var->mode() == VAR in scopes.cc
  v8::internal::Scope::DeclareVariableName
  v8::internal::Scope::DeclareVariableName
  
Sanitizer: address (ASAN)

Regressed: V8: 47247:47248

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5521703332741120


Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.