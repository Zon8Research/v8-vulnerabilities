Detailed Report: https://clusterfuzz.com/testcase?key=5768911856926720

Fuzzing Engine: libFuzzer
Fuzz Target: v8_wasm_compile_fuzzer
Job Type: windows_libfuzzer_chrome_asan
Platform Id: windows

Crash Type: UNKNOWN READ
Crash Address: 0x11aea4a40000
Crash State:
  Builtins_WasmTaggedNonSmiToInt32
  
Sanitizer: address (ASAN)

Recommended Security Severity: Medium

Regressed: https://clusterfuzz.com/revisions?job=windows_libfuzzer_chrome_asan&range=797202:797206

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5768911856926720

Issue filed automatically.

See https://chromium.googlesource.com/chromium/src/+/master/testing/libfuzzer/reproducing.md for instructions on reproducing this bug locally.