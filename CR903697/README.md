Detailed report: https://clusterfuzz.com/testcase?key=5147759445016576

Fuzzer: ochang_js_fuzzer_win
Job Type: windows_asan_d8_dbg
Platform Id: windows

Crash Type: CHECK failure
Crash Address: 
Crash State:
  heap_->Contains(object) in heap.cc
  v8::platform::PrintStackTrace
  v8::internal::VerifyPointersVisitor::VerifyPointers
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=windows_asan_d8_dbg&range=57342:57343

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5147759445016576

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.