Detailed report: https://clusterfuzz.com/testcase?key=5762731014225920

Fuzzer: mbarbella_js_mutation
Job Type: windows_asan_d8_dbg
Platform Id: windows

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  is_resolved() in ast.h
  v8::platform::PrintStackTrace
  v8::internal::interpreter::BytecodeGenerator::VisitNoStackOverflowCheck
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=windows_asan_d8_dbg&range=60725:60726

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5762731014225920

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for instructions to reproduce this bug locally.