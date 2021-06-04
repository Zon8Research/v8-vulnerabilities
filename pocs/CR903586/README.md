Detailed report: https://clusterfuzz.com/testcase?key=5977426330648576

Fuzzer: inferno_layout_test_fuzzer
Job Type: linux_asan_content_shell_drt
Platform Id: linux

Crash Type: Use-after-poison READ 8
Crash Address: 0x7ed48bdce100
Crash State:
  blink::SetWeakCallbackForGCObservation
  v8::internal::GlobalHandles::DispatchPendingPhantomCallbacks
  v8::internal::GlobalHandles::PostGarbageCollectionProcessing
  
Sanitizer: address (ASAN)

Recommended Security Severity: High

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_content_shell_drt&range=606508:606509

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5977426330648576

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.