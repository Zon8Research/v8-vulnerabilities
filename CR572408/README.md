Detailed report: https://cluster-fuzz.appspot.com/testcase?key=4715103649267712

Fuzzer: mbarbella_js_mutation
Job Type: linux_msan_d8
Platform Id: linux

Crash Type: Use-of-uninitialized-value
Crash Address: 
Crash State:
  v8::internal::compiler::VirtualState::MergeFrom
  v8::internal::compiler::EscapeAnalysis::ProcessEffectPhi
  v8::internal::compiler::EscapeAnalysis::Process
  
Regressed: https://cluster-fuzz.appspot.com/revisions?job=linux_msan_d8&range=365539:365583

Minimized Testcase (0.26 Kb):
Download: https://cluster-fuzz.appspot.com/download/AMIfv95Kzthh_DcutZB-lEMdAHmnswAxbdcQh7laBHj8kd7MefxXIDlyXqoQM6ZSuWD2dB_3rEUiu7vrt4ajD_ZtLAo4Ixz99wO8-LcRQDgbktSw3K4BMbbsoDCJTN_EfgeKbVr-pj86X-Txle9PW7kAbq9vRhQkxg
function __f_0() {
  var __v_1 = -1;
 eval();
  switch(x){
    default:
      __v_1 = 0;
      break;
    case 1:
      __v_1 = 1;
      break;
    case 2:
      __v_1 = 2;
      break;
    case 3:
      __v_1 = 4;
  }
};
%OptimizeFunctionOnNextCall(__f_0);
 __f_0();


Filer: inferno

See https://dev.chromium.org/Home/chromium-security/bugs/reproducing-clusterfuzz-bugs for more information.