Detailed report: https://clusterfuzz.com/testcase?key=4625478540066816

Fuzzer: inferno_js_fuzzer
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  var < ParameterCount() in scope-info.cc
  v8::internal::ScopeInfo::ContextLocalIsParameter
  v8::internal::__RT_impl_Runtime_NewSloppyArguments_Generic
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=53822:53823

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=4625478540066816

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.