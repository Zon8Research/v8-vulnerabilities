Detailed report: https://clusterfuzz.com/testcase?key=6216928837500928

Fuzzer: ochang_js_fuzzer
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  non_compiled_functions.size() == idx in module-compiler.cc
  v8::internal::wasm::LazyCompilationOrchestrator::CompileLazy
  v8::internal::WasmCompiledModule::CompileLazy
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=49425:49426

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6216928837500928

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.