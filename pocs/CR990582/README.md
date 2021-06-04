Detailed report: https://clusterfuzz.com/testcase?key=5679236595974144

Fuzzer: mbarbella_js_mutation
Job Type: windows_asan_d8_dbg
Platform Id: windows

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  maybe_table.IsSourcePositionTableWithFrameCache() in code.cc
  v8::platform::PrintStackTrace
  v8::internal::AbstractCode::DropStackFrameCache
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=windows_asan_d8_dbg&range=63051:63052

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5679236595974144

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for instructions to reproduce this bug locally.