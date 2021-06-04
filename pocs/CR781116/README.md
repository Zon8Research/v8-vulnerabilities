Detailed report: https://clusterfuzz.com/testcase?key=5339828970586112

Fuzzer: ochang_js_fuzzer
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  false == cell_reports_intact in isolate.cc
  v8::internal::Isolate::IsFastArrayConstructorPrototypeChainIntact
  v8::internal::compiler::CanInlineArrayResizeOperation
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=47939:47940

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5339828970586112

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.