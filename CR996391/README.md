Detailed Report: https://clusterfuzz.com/testcase?key=5129866388570112

Fuzzing Engine: libFuzzer
Fuzz Target: v8_regexp_parser_fuzzer
Job Type: v8_libfuzzer_asan_debug_linux_arm_sim
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  index < length_ in vector.h
  V8_Dcheck
  v8::internal::Vector<unsigned char const>::operator
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=v8_libfuzzer_asan_debug_linux_arm_sim&range=688964:688965

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5129866388570112

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for instructions to reproduce this bug locally.