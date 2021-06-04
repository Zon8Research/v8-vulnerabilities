Detailed report: https://clusterfuzz.com/testcase?key=6497670079447040

Fuzzer: ochang_js_fuzzer
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  !compilation_info()->dependencies() || !compilation_info()->dependencies()->HasA
  v8::internal::CompilationJob::FinalizeJob
  GetOptimizedCodeNow
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=45141:45142

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6497670079447040

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.