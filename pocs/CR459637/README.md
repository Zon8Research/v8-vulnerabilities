Detailed report: https://cluster-fuzz.appspot.com/testcase?key=5183032550490112

Fuzzer: Mbarbella_js_mutation
Job Type: Linux_msan_d8

Crash Type: Use-of-uninitialized-value
Crash Address: 
Crash State:
  v8::internal::compiler::Schedule::block
  v8::internal::compiler::CFGBuilder::BuildBlockForNode
  v8::internal::compiler::CFGBuilder::BuildBlocksForSuccessors
  
Regressed: https://cluster-fuzz.appspot.com/revisions?job=linux_msan_d8&range=315550:315577

Minimized Testcase (0.18 Kb):
Download: https://cluster-fuzz.appspot.com/download/AMIfv97-tcvSe7jL0sJVRwS2PT2ZukYAtg9x9Ecqz40czPyAF1ZLqFEuRZWNn_ZgUNo_2o4arL7r8U3SSfVJgssmWHQyJiwUU5_t_CKATPsSbvw73JnLr2ujuJamuzSgzw2Rn0qlNZC6E7vFNQLDMTdWrOqukGi7ng
function module() {
    "use asm";
    function __f_1() {
      do ; while (__f_1 ? 0 : 1) ;
      return -1 > 0 ? -1 : 0;
    }
    return __f_1;
}
var __f_1 = module();
 __f_1();


Filer: mbarbella