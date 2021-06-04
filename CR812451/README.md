Detailed report: https://clusterfuzz.com/testcase?key=5431736524341248

Fuzzer: mbarbella_js_mutation
Job Type: linux_ubsan_vptr_d8
Platform Id: linux

Crash Type: UNKNOWN READ
Crash Address: 0x35db2f626fe8
Crash State:
  /build/eglibc-ripdx6/eglibc-NUMBER/string/../sysdeps/x86_64/multiarch/memcpy-sse
  MemCopy
  CopyWords<v8::internal::Object
  
Sanitizer: undefined (UBSAN)

Recommended Security Severity: Medium

Regressed: https://clusterfuzz.com/revisions?job=linux_ubsan_vptr_d8&range=51296:51297

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5431736524341248

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.