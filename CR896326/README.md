Detailed report: https://clusterfuzz.com/testcase?key=5532012793036800

Fuzzer: ochang_js_fuzzer
Job Type: linux_asan_d8_v8_arm64_dbg
Platform Id: linux

Crash Type: UNKNOWN WRITE
Crash Address: 0x7f8db962e070
Crash State:
  MemoryWrite<unsigned
  v8::internal::Simulator::LoadStoreHelper
  v8::internal::Simulator::ExecuteInstruction
  
Sanitizer: address (ASAN)

Recommended Security Severity: High

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_v8_arm64_dbg&range=39415:39416

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5532012793036800

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.