Detailed report: https://clusterfuzz.com/testcase?key=5124911310962688

Fuzzer: lokihardt_jshitter
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: CHECK failure
Crash Address: 
Crash State:
  !result.failed() in wasm-engine.cc
  v8::internal::wasm::WasmEngine::SyncCompileTranslatedAsmJs
  v8::internal::AsmJsCompilationJob::FinalizeJobImpl
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=50678:50679

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5124911310962688

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for instructions to reproduce this bug locally.