Detailed report: https://cluster-fuzz.appspot.com/testcase?key=6729761343930368

Fuzzer: afl_v8_wasm_call_fuzzer
Job Type: afl_chrome_asan
Platform Id: linux

Crash Type: UNKNOWN READ
Crash Address: 0x0000fffff040
Crash State:
  v8::internal::Invoke
  CallInternal
  v8::internal::Execution::Call
  
Sanitizer: address (ASAN)

Recommended Security Severity: Medium

Regressed: https://cluster-fuzz.appspot.com/revisions?job=afl_chrome_asan&range=446316:446370

Reproducer Testcase: https://cluster-fuzz.appspot.com/download/AMIfv953zaWEHYm4Nmy9buaXPYGpTKHryo5AVD37u8kvWfzXyxo5JzIGAIv6qift1zUYZ8fBLPtbnNMbonwHdYENS8DpD516ZseoeVdHm2pQ3xK7iikLlMzU5whbAN8ttOQR_fyK1rDD5K15Lt_bSJgGEAcScJlJ1cazcZsbKsrCOi2l1nyb6D0hjItIgmqTC5_wIGH5bT_1iztRTWA2FcO5_mqlh4ykB1530UfyWR4nhuBKuk53VADczwblQjKvtAjoaNN7bjMTGtSI8PM1I6HzZxRYzrZ69eCMe4bEQJzb2K7lHTskAoFaFumhEBzeb-upZH0taS6EaTuALp2nULoW0J3p08CO1C7XfhbkCwG8Zls6fqA6KnB9VUiO3IcWAVxsPG0hyhIGkq7mvjIjkr0gR6IIuYY5oA?testcase_id=6729761343930368


Issue filed automatically.

See https://chromium.googlesource.com/chromium/src/+/master/testing/libfuzzer/reproducing.md for more information.