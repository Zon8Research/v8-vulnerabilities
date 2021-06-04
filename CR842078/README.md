Detailed report: https://clusterfuzz.com/testcase?key=5635782929547264

Fuzzer: mbarbella_js_mutation
Job Type: linux_msan_d8
Platform Id: linux

Crash Type: UNKNOWN WRITE
Crash Address: 0x7e8b3a506d58
Crash State:
  v8::internal::String::MakeExternal
  v8::internal::ExternalizeStringExtension::Externalize
  v8::internal::FunctionCallbackArguments::Call
  
Sanitizer: memory (MSAN)

Recommended Security Severity: High

Regressed: https://clusterfuzz.com/revisions?job=linux_msan_d8&range=53086:53087

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5635782929547264

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.