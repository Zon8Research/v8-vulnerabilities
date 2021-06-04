Detailed report: https://clusterfuzz.com/testcase?key=5415087937683456

Fuzzer: mbarbella_js_mutation
Job Type: windows_asan_d8_dbg
Platform Id: windows

Crash Type: CHECK failure
Crash Address: 
Crash State:
  !descriptors->GetKey(i)->IsInterestingSymbol() in objects-debug.cc
  v8::platform::PrintStackTrace
  v8::internal::Map::MapVerify
  
Sanitizer: address (ASAN)

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5415087937683456

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.