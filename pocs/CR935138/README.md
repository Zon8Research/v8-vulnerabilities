Detailed report: https://clusterfuzz.com/testcase?key=5710095327559680

Fuzzer: ochang_js_fuzzer
Job Type: linux_msan_d8
Platform Id: linux

Crash Type: Use-of-uninitialized-value
Crash Address: 
Crash State:
  v8::internal::compiler::TurbofanWasmCompilationUnit::BuildGraphForWasmFunction
  v8::internal::compiler::TurbofanWasmCompilationUnit::ExecuteCompilation
  v8::internal::wasm::WasmCompilationUnit::ExecuteCompilation
  
Sanitizer: memory (MSAN)

Recommended Security Severity: Medium

Regressed: https://clusterfuzz.com/revisions?job=linux_msan_d8&range=59701:59702

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5710095327559680

Issue filed automatically.

See https://www.chromium.org/developers/testing/memorysanitizer#TOC-Reproducing-ClusterFuzz-Bugs for instructions to reproduce this bug locally.