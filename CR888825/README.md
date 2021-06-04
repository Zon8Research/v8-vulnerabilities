Detailed report: https://clusterfuzz.com/testcase?key=4886486141632512

Fuzzer: ochang_js_fuzzer
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  byte_data_->size() % ByteData::kSkippableFunctionDataSize == ByteData::kPlacehol
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=56170:56171

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=4886486141632512

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.