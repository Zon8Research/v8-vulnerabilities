Detailed report: https://clusterfuzz.com/testcase?key=4655273041199104

Fuzzer: ochang_js_fuzzer
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  (native_module_->lazy_builtin_) == nullptr in wasm-serialization.cc
  v8::internal::wasm::NativeModuleSerializer::NativeModuleSerializer
  v8::internal::wasm::SerializeNativeModule
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=49947:49948

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=4655273041199104

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.