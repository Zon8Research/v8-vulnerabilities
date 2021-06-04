Detailed Report: https://clusterfuzz.com/testcase?key=5740071492059136

Fuzzer: ochang_js_fuzzer
Job Type: linux_msan_d8
Platform Id: linux

Crash Type: UNKNOWN READ
Crash Address: 0x7ebb084003fe
Crash State:
  v8::internal::Simulator::LoadStoreHelper
  v8::internal::Simulator::ExecuteInstruction
  v8::internal::Simulator::Run
  
Sanitizer: memory (MSAN)

Recommended Security Severity: Medium

Regressed: https://clusterfuzz.com/revisions?job=linux_msan_d8&range=69635:69636

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5740071492059136

Issue filed automatically.

See https://www.chromium.org/developers/testing/memorysanitizer#TOC-Reproducing-ClusterFuzz-Bugs for instructions on reproducing this bug locally.