Detailed report: https://cluster-fuzz.appspot.com/testcase?key=6744765019455488

Fuzzer: mbarbella_js_mutation
Job Type: linux_msan_d8
Platform Id: linux

Crash Type: Use-of-uninitialized-value
Crash Address: 
Crash State:
  v8::internal::compiler::Node::New
  v8::internal::compiler::Graph::NewNode
  v8::internal::compiler::AllocationBuilder::AllocateArray
  
Recommended Security Severity: Medium

Regressed: https://cluster-fuzz.appspot.com/revisions?job=linux_msan_d8&range=431896:432153

Minimized Testcase (0.26 Kb):
Download: https://cluster-fuzz.appspot.com/download/AMIfv97YnekPiqwFm50uSvpXYln_p_0de0vxronweE80beeKpLrLiDdR33g8akbqPJLoOsT69gShxDlxlng6GATetlyL4gwjoADUfwY4A-UM9U_b7TK5zlaxk7duPkpq1GE7cn7m-Y30qUPxpIcbFI0LCYlHWWETpg?testcase_id=6744765019455488
function __f_12() {
  var __v_8 = [];
  var __v_5 = [, true, false, null, , undefined, NaN];
  var __v_9 = 0;
  for (var __v_12 of __v_5.entries()) {
    __v_8[__v_9++] = __v_12;
  }
  for (var __v_9 = 0; __v_9 < __v_8.length; __v_9++) {
  }

    __f_12();
  
}
__f_12();


Issue filed automatically.

See https://dev.chromium.org/Home/chromium-security/bugs/reproducing-clusterfuzz-bugs for more information.