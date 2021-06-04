Detailed report: https://clusterfuzz.com/testcase?key=5664933669109760

Job Type: linux_asan_d8
Platform Id: linux

Crash Type: UNKNOWN READ
Crash Address: 0x1336ffffffff
Crash State:
  Builtins_GetPropertyWithReceiver
  Builtins_ProxyGetProperty
  Builtins_LdaNamedPropertyHandler
  
Sanitizer: address (ASAN)

Recommended Security Severity: Medium

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8&range=62430:62431

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5664933669109760

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for instructions to reproduce this bug locally.