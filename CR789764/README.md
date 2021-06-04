Detailed report: https://clusterfuzz.com/testcase?key=5044048028237824

Job Type: linux_asan_chrome_mp
Crash Type: UNKNOWN READ
Crash Address: 0x123400000007
Crash State:
  v8::internal::Script::FindSharedFunctionInfo
  v8::internal::Compiler::GetSharedFunctionInfo
  v8::internal::interpreter::BytecodeGenerator::AllocateDeferredConstants
  
Sanitizer: address (ASAN)

Recommended Security Severity: Medium

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_chrome_mp&range=438853:439220

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5044048028237824

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.