Detailed report: https://clusterfuzz.com/testcase?key=5501392897966080

Fuzzer: ochang_js_fuzzer
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  right_type()->Is(Type::PlainPrimitive()) in js-typed-lowering.cc
  v8::internal::compiler::JSBinopReduction::ConvertInputsToNumber
  ReduceSpeculativeNumberBinop
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=47283:47284

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5501392897966080

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.