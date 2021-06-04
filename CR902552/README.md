Detailed report: https://clusterfuzz.com/testcase?key=4911513175064576

Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  AllowCodeDependencyChange::IsAllowed() in objects.cc
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=55298:55299

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=4911513175064576

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.