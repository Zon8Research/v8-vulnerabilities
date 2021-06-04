Detailed report: https://cluster-fuzz.appspot.com/testcase?key=5311753521463296

Fuzzer: Mbarbella_js_mutation
Job Type: Linux_asan_d8_v8_arm

Crash Type: UNKNOWN
Crash Address: 0xfffffffd
Crash State:
  v8::internal::Simulator::DecodeType2
  v8::internal::Simulator::InstructionDecode
  v8::internal::Simulator::Execute
  
Regressed: https://cluster-fuzz.appspot.com/revisions?job=linux_asan_d8_v8_arm&range=308783:309121

Minimized Testcase (0.11 Kb):
Download: https://cluster-fuzz.appspot.com/download/AMIfv96c4tgfIHa0VxaL0BQeKvKG9tkjMMHjeoUuBQ_XNCTuKPqDpJqXYXK0gxT2-FSDMlwl1oUT7WwsJ0VG2XjztrsufjjSEU2hIyvgQWn5QNSF-HhdKbKa6zsCJDXPxunich8A72MFd1Sfqkc-Ef-zZbnUe43eUQ
var __v_9 = -1;
Number.prototype.__proto__ = [, 3];
function __f_9() {
  return __v_9.sort();
}
["x"], __f_9();


Filer: inferno