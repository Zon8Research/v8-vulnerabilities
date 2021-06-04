Detailed report: https://clusterfuzz.com/testcase?key=5152138175053824

Fuzzer: inferno_js_fuzzer
Job Type: windows_asan_d8_dbg
Platform Id: windows

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  !var->has_forced_context_allocation() || var->is_used() in scopes.cc
  v8::platform::PrintStackTrace
  v8::internal::Scope::MustAllocate
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=windows_asan_d8_dbg&range=59392:59393

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5152138175053824

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for instructions to reproduce this bug locally.