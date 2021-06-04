Detailed report: https://clusterfuzz.com/testcase?key=5102254041071616

Fuzzer: mbarbella_js_mutation
Job Type: windows_asan_d8_dbg
Platform Id: windows

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  code->kind() == Code::OPTIMIZED_FUNCTION in frames.cc
  v8::platform::PrintStackTrace
  v8::internal::OptimizedFrame::GetDeoptimizationData
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=windows_asan_d8_dbg&range=56362:56363

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5102254041071616

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.