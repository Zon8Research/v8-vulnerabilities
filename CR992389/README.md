Detailed report: https://clusterfuzz.com/testcase?key=5105215906119680

Fuzzer: mbarbella_js_mutation
Job Type: linux_msan_d8
Platform Id: linux

Crash Type: UNKNOWN READ
Crash Address: 0x7ed4880402d8
Crash State:
  v8::internal::IrregexpInterpreter::Result v8::internal::RawMatch<unsigned char>
  v8::internal::IrregexpInterpreter::Match
  v8::internal::IrregexpInterpreter::MatchForCallFromRuntime
  
Sanitizer: memory (MSAN)

Recommended Security Severity: Medium

Regressed: https://clusterfuzz.com/revisions?job=linux_msan_d8&range=63125:63126

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5105215906119680

Issue filed automatically.

See https://www.chromium.org/developers/testing/memorysanitizer#TOC-Reproducing-ClusterFuzz-Bugs for instructions to reproduce this bug locally.