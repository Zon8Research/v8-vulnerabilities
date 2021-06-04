Detailed report: https://clusterfuzz.com/testcase?key=4577259615944704

Fuzzer: decoder_langfuzz
Job Type: linux_asan_d8_v8_mipsel_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  (function_) == nullptr in scopes.cc
  V8_Dcheck
  v8::internal::DeclarationScope::DeclareFunctionVar
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_v8_mipsel_dbg&range=48275:48276

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=4577259615944704

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.