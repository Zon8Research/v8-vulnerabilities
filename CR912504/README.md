Detailed report: https://clusterfuzz.com/testcase?key=4707434654072832

Fuzzer: ochang_js_fuzzer_win
Job Type: windows_asan_d8_dbg
Platform Id: windows

Crash Type: CHECK failure
Crash Address: 
Crash State:
  fixed_size_above_fp + in deoptimizer.cc
  v8::platform::PrintStackTrace
  v8::internal::Deoptimizer::ComputeInputFrameSize
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=windows_asan_d8_dbg&range=58050:58051

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=4707434654072832

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.