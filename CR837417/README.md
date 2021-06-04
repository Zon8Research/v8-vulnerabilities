Detailed report: https://clusterfuzz.com/testcase?key=5305166916747264

Job Type: linux_asan_chrome_mp
Platform Id: linux

Crash Type: Null-dereference READ
Crash Address: 0x000000000000
Crash State:
  v8::internal::wasm::InstantiateToInstanceObject
  v8::WebAssemblyInstantiateImpl
  v8::WebAssemblyInstantiateCallback
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_chrome_mp&range=523898:523900

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5305166916747264

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.