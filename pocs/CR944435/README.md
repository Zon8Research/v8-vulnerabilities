Detailed report: https://clusterfuzz.com/testcase?key=5111715252535296

Fuzzer: decoder_langfuzz
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: CHECK failure
Crash Address: 
Crash State:
  (value & uint64_t{ADDRESS}) != unexpected || (value & uint64_t{ADDRESS}) == uint
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=59978:59979

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5111715252535296

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for instructions to reproduce this bug locally.