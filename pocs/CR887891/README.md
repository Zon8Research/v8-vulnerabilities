Detailed report: https://clusterfuzz.com/testcase?key=6102820754030592

Fuzzer: ochang_js_fuzzer
Job Type: linux_asan_d8_v8_arm_dbg
Platform Id: linux

Crash Type: CHECK failure
Crash Address: 
Crash State:
  byte_length() <= JSArrayBuffer::kMaxByteLength in objects-debug.cc
  v8::internal::JSArrayBufferView::JSArrayBufferViewVerify
  v8::internal::JSTypedArray::JSTypedArrayVerify
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_v8_arm_dbg&range=56007:56008

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6102820754030592

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.