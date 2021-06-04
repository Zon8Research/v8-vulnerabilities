Detailed report: https://clusterfuzz.com/testcase?key=5719877308514304

Fuzzer: ochang_js_fuzzer
Job Type: linux_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  old_map_->is_stable() in map-updater.cc
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_d8_dbg&range=59615:59616

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5719877308514304

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for instructions to reproduce this bug locally.