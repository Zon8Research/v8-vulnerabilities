Detailed Report: https://clusterfuzz.com/testcase?key=6131173559173120

Fuzzer: inferno_layout_test_unmodified
Job Type: linux_msan_content_shell_drt
Platform Id: linux

Crash Type: Use-of-uninitialized-value
Crash Address: 
Crash State:
  v8::internal::JSDateTimeFormat::New
  v8::internal::Builtin_Impl_DateTimeFormatConstructor
  v8::internal::Simulator::DoRuntimeCall
  
Sanitizer: memory (MSAN)

Recommended Security Severity: Medium

Regressed: https://clusterfuzz.com/revisions?job=linux_msan_content_shell_drt&range=852211:852216

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6131173559173120

Issue filed automatically.

See https://www.chromium.org/developers/testing/memorysanitizer#TOC-Reproducing-ClusterFuzz-Bugs for instructions on reproducing this bug locally.