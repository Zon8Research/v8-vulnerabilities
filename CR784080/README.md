Detailed report: https://clusterfuzz.com/testcase?key=6497963143856128

Fuzzer: decoder_langfuzz
Job Type: linux_asan_d8_v8_arm_dbg
Platform Id: linux

Crash Type: UNKNOWN READ
Crash Address: 0xcbe17ed4
Crash State:
  v8::internal::Simulator::DecodeType3
  v8::internal::Simulator::InstructionDecode
  v8::internal::Simulator::CallInternal
  
Sanitizer: address (ASAN)

Recommended Security Severity: Medium

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_v8_arm_dbg&range=48861:48862

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6497963143856128

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.