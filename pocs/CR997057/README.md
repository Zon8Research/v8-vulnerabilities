Detailed Report: https://clusterfuzz.com/testcase?key=5132107528929280

Fuzzer: ochang_js_fuzzer_win
Job Type: windows_asan_d8
Platform Id: windows

Crash Type: Heap-use-after-free READ 4
Crash Address: 0x12589c40dcd0
Crash State:
  v8::internal::compiler::ConstantFoldingReducer::Reduce
  v8::internal::compiler::GraphReducer::Reduce
  v8::internal::compiler::GraphReducer::ReduceTop
  
Sanitizer: address (ASAN)

Recommended Security Severity: High

Regressed: https://clusterfuzz.com/revisions?job=windows_asan_d8&range=61413:61414

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5132107528929280

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for instructions to reproduce this bug locally.