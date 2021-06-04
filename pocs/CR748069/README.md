Detailed report: https://clusterfuzz.com/testcase?key=5963309538082816

Fuzzer: mbarbella_js_mutation
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: UNKNOWN WRITE
Crash Address: 0x7f0cf1880000
Crash State:
  Append
  void v8::internal::JsonStringifier::SerializeStringUnchecked_<unsigned char, uns
  void v8::internal::JsonStringifier::SerializeString_<unsigned char, unsigned cha
  
Sanitizer: address (ASAN)

Recommended Security Severity: High

Regressed: V8: 46837:46838

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5963309538082816


Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.