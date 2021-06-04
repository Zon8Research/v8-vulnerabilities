Detailed report: https://clusterfuzz.com/testcase?key=6142269672652800

Fuzzer: ochang_js_fuzzer
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  IrOpcode::kMerge == control->opcode() in node-properties.cc
  v8::internal::compiler::NodeProperties::InferReceiverMaps
  v8::internal::compiler::JSNativeContextSpecialization::InferReceiverMaps
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=50283:50284

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6142269672652800

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.