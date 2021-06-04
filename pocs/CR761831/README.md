Detailed report: https://clusterfuzz.com/testcase?key=6010193094901760

Fuzzer: inferno_js_fuzzer_c
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  !already_resolved_ in scopes.cc
  v8::internal::DeclarationScope::AddLocal
  v8::internal::Scope::NewTemporary
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=44176:44177

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6010193094901760

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.