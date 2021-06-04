Detailed Report: https://clusterfuzz.com/testcase?key=5662199714480128

Fuzzer: mbarbella_js_mutation
Job Type: windows_asan_d8_dbg
Platform Id: windows

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  cache != this implies cache->outer_scope()->deserialized_scope_uses_external_cac
  v8::platform::PrintStackTrace
  v8::internal::Scope::LookupInScopeInfo
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=windows_asan_d8_dbg&range=65731:65732

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5662199714480128

Issue filed automatically.

