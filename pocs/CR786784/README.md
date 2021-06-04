Detailed report: https://clusterfuzz.com/testcase?key=5455700821278720

Fuzzer: inferno_twister
Job Type: mac_asan_content_shell
Platform Id: mac

Crash Type: UNKNOWN READ
Crash Address: 0x000500000007
Crash State:
  v8::internal::Invoke
  v8::internal::Execution::Call
  v8::Function::Call
  
Sanitizer: address (ASAN)

Recommended Security Severity: Medium

Regressed: https://clusterfuzz.com/revisions?job=mac_asan_content_shell&range=499408:499633

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5455700821278720

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.