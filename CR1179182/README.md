Detailed Report: https://clusterfuzz.com/testcase?key=4653734656016384

Fuzzing Engine: libFuzzer
Fuzz Target: v8_wasm_fuzzer
Job Type: v8_libfuzzer_asan_linux_arm64_sim
Platform Id: linux

Crash Type: Segv on unknown address
Crash Address: 
Crash State:
  v8::base::Memcpy
  void v8::internal::Simulator::MemoryWrite<unsigned short, unsigned long>
  v8::internal::Simulator::LoadStoreHelper
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=v8_libfuzzer_asan_linux_arm64_sim&range=854465:854466

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=4653734656016384

Issue filed automatically.

See https://chromium.googlesource.com/chromium/src/+/master/testing/libfuzzer/reproducing.md for instructions on reproducing this bug locally.
