Detailed report: https://clusterfuzz.com/testcase?key=5138837554987008

Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  !new_map->has_frozen_or_sealed_elements() in js-objects.cc
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=62456:62457

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5138837554987008

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for instructions to reproduce this bug locally.