Detailed report: https://clusterfuzz.com/testcase?key=4731104950222848

Fuzzer: ochang_js_fuzzer
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  receiver->map() == *original_map in elements.cc
  IncludesValueImpl
  v8::internal::ElementsAccessorBase<v8::internal::DictionaryElementsAccessor, v8:
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=50479:50480

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=4731104950222848

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.