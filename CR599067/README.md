Detailed report: https://cluster-fuzz.appspot.com/testcase?key=6658500058415104

Fuzzer: mbarbella_js_mutation
Job Type: linux_asan_d8_ignition_dbg
Platform Id: linux

Crash Type: RUNTIME_ASSERT
Crash Address: 
Crash State:
  args[0]->IsJSObject() in src/runtime/runtime-internal.cc
  

Minimized Testcase (0.23 Kb):
Download: https://cluster-fuzz.appspot.com/download/AMIfv9667EmnQRh-fQH5_3gxMEj2RpJcr1qEPmyw4FGT_BnlVmKLKFUyef2nagPE1rqqcw_CPx06JZpu9Vqu8oYK8CdSHxveEp9bYNmV80MMC04wBOC62WU6UCj_iobngc7jOPRFo_GdASyUUQBHv80ab2WYgiXEvg
try {
__v_2 = {};
__v_3 = new Proxy({}, __v_2);
} catch(e) {; }

  function __f_4() {
  }
function __f_34() {
}
__v_7 = { valueOf: function() { FAIL; },
                toString: function() { FAIL; } };
 Error.captureStackTrace(__v_3); 


Filer: hablich

See https://dev.chromium.org/Home/chromium-security/bugs/reproducing-clusterfuzz-bugs for more information.