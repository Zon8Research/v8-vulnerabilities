Detailed report: https://cluster-fuzz.appspot.com/testcase?key=4518897726783488

Fuzzer: Mbarbella_js_mutation
Job Type: Linux_asan_d8_v8_arm64_dbg

Crash Type: UNKNOWN
Crash Address: 0x00009fff8006
Crash State:
  v8::internal::Simulator::LoadStoreHelper
  v8::internal::Decoder<v8::internal::Simulator>::DecodeLoadStore
  v8::internal::Decoder<v8::internal::Simulator>::Decode
  
Regressed: V8: r28354:28391

Minimized Testcase (0.16 Kb):
Download: https://cluster-fuzz.appspot.com/download/AMIfv94hnOPEDrlSE3SAcJsl9W53xsF8yIWkKtEE3P8gK7k2KpgXTwEjK5fG4qcCqlOFdEvGGaPoVHNGhzIgIAyfBVhDaxz1SWaSnPl6jikvCduS_4f1vVnhH4_A0NzphWhqwOrAXrD9i_NSZrJrN-UTqmUb93KfMg
this.__proto__ = Array.prototype;
Object.freeze(this);
function __f_0() {
  for (var __v_0 = 0; __v_0 < 100000; __v_0++) {
    this.length = 1;
  }
}
 __f_0();


Filer: machenbach