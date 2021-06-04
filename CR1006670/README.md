Detailed Report: https://clusterfuzz.com/testcase?key=5754955441766400

Fuzzing Engine: libFuzzer
Fuzz Target: v8_regexp_parser_fuzzer
Job Type: v8_libfuzzer_asan_linux_arm_sim
Platform Id: linux

Crash Type: UNKNOWN
Crash Address: 0x20000000
Crash State:
  v8::base::SmallVector<int, 64u>::Grow
  v8::base::SmallVector<int, 64u>::Grow
  void v8::base::SmallVector<int, 64u>::emplace_back<int&>
  
Sanitizer: address (ASAN)

Recommended Security Severity: Medium

Regressed: https://clusterfuzz.com/revisions?job=v8_libfuzzer_asan_linux_arm_sim&range=698525:698527

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5754955441766400

Issue filed automatically.

See https://chromium.googlesource.com/chromium/src/+/master/testing/libfuzzer/reproducing.md for instructions on reproducing this bug locally.