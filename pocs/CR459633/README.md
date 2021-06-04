Detailed report: https://cluster-fuzz.appspot.com/testcase?key=6183610980761600

Fuzzer: Mbarbella_js_mutation
Job Type: Linux_v8_d8_tot

Crash Type: Use-after-poison READ 8
Crash Address: 0x62d0000441e8
Crash State:
  v8::internal::compiler::Node::Input::Update
  v8::internal::compiler::OsrHelper::Deconstruct
  void v8::internal::compiler::Pipeline::Run<v8::internal::compiler::OsrDecon
  
Regressed: V8: r26575:26593

Minimized Testcase (0.21 Kb):
Download: https://cluster-fuzz.appspot.com/download/AMIfv96bxzwa4ywuIKon6PJjQhiXFPV12OxpWoC29ybham3FWxw6guR-eMInwe6krRu4sPR9V_--JAtFD-bmrbUoYsu2k9B3vtoeyG8TWPCNtZjIm8UYIRZRFGwqCZSKUkfx9R7XES4eqYakmr00tGzDI3gP5alQZw
function __f_4(a,b) {
  var __v_4 = 0;
  var __v_3 = 0;
  for (var __v_6 = 0; __v_6 < 2; __v_6++) {
    while (b > -3) { __v_3 += 26; b--; }
  }
}
function __f_6(f,a,b,c) {
 f(a,b);
}
__f_6(__f_4,     4, 50000);


Filer: mbarbella