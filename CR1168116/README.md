Detailed Report: https://clusterfuzz.com/testcase?key=5490390500442112

Fuzzing Engine: libFuzzer
Fuzz Target: v8_wasm_async_fuzzer
Job Type: windows_libfuzzer_chrome_asan
Platform Id: windows

Crash Type: Null-dereference
Crash Address: 0x000000000000
Crash State:
  v8::base::Thread::Start
  v8::platform::DefaultWorkerThreadsTaskRunner::DefaultWorkerThreadsTaskRunner
  v8::platform::DefaultPlatform::DefaultPlatform
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=windows_libfuzzer_chrome_asan&range=844501:844524

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5490390500442112

Issue filed automatically.

See https://chromium.googlesource.com/chromium/src/+/master/testing/libfuzzer/reproducing.md for instructions on reproducing this bug locally.