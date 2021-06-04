Detailed report: https://cluster-fuzz.appspot.com/testcase?key=6475380073693184

Fuzzer: v8_builtins_generator
Job Type: linux_asan_d8_v8_arm_dbg
Platform Id: linux

Crash Type: UNKNOWN READ
Crash Address: 0xda7849bc
Crash State:
  v8::internal::Simulator::DecodeType3
  v8::internal::Simulator::InstructionDecode
  v8::internal::Simulator::Execute
  
Recommended Security Severity: Medium

Regressed: V8: r40895:40896

Minimized Testcase (0.17 Kb):
Download: https://cluster-fuzz.appspot.com/download/AMIfv96jGGc4pqJxLr8lnxWkVEDz6-1z-DN5P60KeGdXgO2Ywz8nTqhsDrW45uAzL_U5XHFBCOLd1447MztdrbdMmEjEQgASY9lANSjxt3XMWO587HcYGgvebm79m1nIjc_dmlSkdsVr1tENgpt7beY33QS0SDg3OA?testcase_id=6475380073693184
var v37 = {};
var v45 = {};
Object.prototype.__defineGetter__(0, function() { 
    this[1] = -2147483648;
this[1] = v45;
this[1] = Array(0x8000).join();
});
 v81 = v37[0]; 


Issue manually filed by: titzer

See https://dev.chromium.org/Home/chromium-security/bugs/reproducing-clusterfuzz-bugs for more information.