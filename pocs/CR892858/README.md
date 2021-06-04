Detailed report: https://clusterfuzz.com/testcase?key=4829822520655872

Fuzzer: ochang_js_fuzzer
Job Type: linux_asan_d8_v8_arm64_dbg
Platform Id: linux

Crash Type: Global-buffer-overflow READ 4
Crash Address: 0x7f40c3c0d8a3
Crash State:
  MemoryRead<unsigned
  v8::internal::Simulator::LoadStoreHelper
  v8::internal::Simulator::ExecuteInstruction
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_v8_arm64_dbg&range=56413:56414

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=4829822520655872

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.