Detailed report: https://cluster-fuzz.appspot.com/testcase?key=4753839081652224

Fuzzer: Mbarbella_js_mutation
Job Type: Linux_asan_d8_dbg

Crash Type: UNKNOWN
Crash Address: 0x000092115c59
Crash State:
  v8::internal::Invoke
  v8::internal::Execution::Call
  v8::Script::Run
  
Regressed: V8: r28211:28220

Minimized Testcase (0.11 Kb):
Download: https://cluster-fuzz.appspot.com/download/AMIfv947YZ_jPyqtqlQ0pEtJq3TLIbDTY0QjKzQEirz4pzoj-2AjMUOC3-KteaVhoklePMvEo7ttGWW_-Aos921ZZAGdcACD7QV1K7EkhrM3UDmWyuj16nm5pW8OOF30NvCAL5pmoi6mCqiq0R_D7IO5yxcrE8T6Sw
var __v_44 = Math;
var __v_43 = "floor";
function __f_42() {
__v_44[__v_43]()+1}
__f_42();
__v_44 = 0;
__f_42();


Filer: jarin