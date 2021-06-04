Detailed report: https://cluster-fuzz.appspot.com/testcase?key=6614862227832832

Fuzzer: decoder_langfuzz
Job Type: linux_asan_chrome_v8_d8
Platform Id: linux

Crash Type: Heap-buffer-overflow READ 1
Crash Address: 0x622000002c89
Crash State:
  v8::internal::Invoke
  v8::internal::Execution::Call
  v8::Script::Run
  
Sanitizer: address (ASAN)

Recommended Security Severity: Medium

Regressed: V8: 43421:43428

Reproducer Testcase: https://cluster-fuzz.appspot.com/download/AMIfv97huhK6ZFLR1AybbA-b8Wa0asAYTadoTHlOmLVmCMU4Upla9fwvQOJtm_T469aOtxwVttXGjmxF1ukjQLfQ7XmxXFGQ0qGTzm-P35iBhtbNcsIlA-QPt6OnuC-XBtHdjG1abUGldk-SyHTQgvY7gUk8YHaBSl6HNGUAMfNr_Dlx6PK2momwtAdSghXnIWCenxbKCFBhBT1O7lfSKAu1a8C96FiSXGHEblmxmPul6Ll2KxPULps50iWu4aky_eHWPGjBQRYbb8AGQpHGrw2RYsrZylbSWZK6xgYh-ZQw18N4ZFZsgts9uFXcp4csBN2sqZnbbFCIBsbfubgxb-7xfd0tzm6ZzZVFVhSCNlTRHIqLCp-4G1k?testcase_id=6614862227832832


Issue filed automatically.

See https://dev.chromium.org/Home/chromium-security/bugs/reproducing-clusterfuzz-bugs for more information.