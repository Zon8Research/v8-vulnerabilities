Detailed report: https://cluster-fuzz.appspot.com/testcase?key=4739173301354496

Fuzzer: Mbarbella_js_mutation
Job Type: Windows_asan_d8

Crash Type: UNKNOWN
Crash Address: 0xffffffff
Crash State:
  v8::internal::ScopeIterator::Type
  v8::internal::ScopeIterator::Next
  v8::internal::Runtime_GetScopeCount
  
Regressed: https://cluster-fuzz.appspot.com/revisions?job=windows_asan_d8&range=336410:336452

Minimized Testcase (0.22 Kb):
Download: https://cluster-fuzz.appspot.com/download/AMIfv94F2H3OR85191UDi87pWG4VZFRqH6NvmLxbPC8xyQHetHUriEp-RumbqUjlJWiOVEZINPry_3nFCQC17-BLS2vkpXP9XsWq1LdRgDxiKSJPHEFrZsvoOmMxVzTzws7NNR1ZLNVJ6dK-aXRwMQOpvCKHCQVCCw
try {
} catch(e) {; }
var Debug = %GetDebugContext().Debug;
function __f_3(event, exec_state) {
    var __v_9 = exec_state.frame().scopeCount();
}
Debug.setListener(__f_3);
function __f_4() {
  debugger;
      eval();
}
__f_4();


Filer: inferno