Detailed report: https://clusterfuzz.com/testcase?key=6611579725676544

Fuzzer: mbarbella_js_mutation
Job Type: linux_msan_d8
Platform Id: linux

Crash Type: UNKNOWN WRITE
Crash Address: 0x7fee9c875fd0
Crash State:
  v8::internal::Simulator::LoadStorePairHelper
  v8::internal::Simulator::Run
  v8::internal::Simulator::CallVoid
  
Sanitizer: memory (MSAN)

Recommended Security Severity: High

Regressed: https://clusterfuzz.com/revisions?job=linux_msan_d8&range=49558:49559

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6611579725676544

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.