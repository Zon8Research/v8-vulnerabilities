Detailed Report: https://clusterfuzz.com/testcase?key=5085077388001280

Fuzzer: ochang_js_fuzzer_win
Job Type: windows_asan_d8_dbg
Platform Id: windows

Crash Type: CHECK failure
Crash Address: 
Crash State:
  static_cast<uintptr_t>(caller_frame_top_) - total_output_frame_size > stack_guar
  v8::platform::PrintStackTrace
  v8::internal::Deoptimizer::DoComputeOutputFrames
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=windows_asan_d8_dbg&range=62737:62738

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5085077388001280

Issue filed automatically.

