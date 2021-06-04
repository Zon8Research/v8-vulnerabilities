Detailed report: https://cluster-fuzz.appspot.com/testcase?key=5895840247054336

Fuzzer: v8_builtins_generator
Job Type: linux_ubsan_vptr_d8
Platform Id: linux

Crash Type: Bad-cast
Crash Address: 0x7f6841b27fd0
Crash State:
  Bad-cast to icu_58::DateFormat from icu_58::DecimalFormat
  __RT_impl_Runtime_InternalDateFormatToParts
  v8::internal::Runtime_InternalDateFormatToParts
  
Recommended Security Severity: High

Regressed: https://cluster-fuzz.appspot.com/revisions?job=linux_ubsan_vptr_d8&range=440646:440653

Minimized Testcase (0.14 Kb):
Download: https://cluster-fuzz.appspot.com/download/AMIfv96ueLrSxn6OHxempAHuKizR3oZ4MjH_TneznCZqiwCwIhOnfGkRZPC3NPhzHnArNncms3CSdyhmGLmEf4PXVJlay-5mYvzRqGpJov0lNQHh69yps1FKAmAOBNkIHmz0wN3yH72fBFsH66fbG92LjZsM04ptGA?testcase_id=5895840247054336
 v5 = new Intl.NumberFormat(); 
 v9 = new Intl.DateTimeFormat(); 
 v52 = v9["formatToParts"]; 
var v55 = {};
 v74 = Reflect.apply(v52, v5, v55); 


Issue filed automatically.

See https://dev.chromium.org/Home/chromium-security/bugs/reproducing-clusterfuzz-bugs for more information.