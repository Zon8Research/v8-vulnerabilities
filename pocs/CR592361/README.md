Detailed report: https://cluster-fuzz.appspot.com/testcase?key=5502680159485952

Fuzzer: mbarbella_js_mutation
Job Type: linux_msan_d8
Platform Id: linux

Crash Type: Use-of-uninitialized-value
Crash Address: 
Crash State:
  v8::InstantiateModuleFromAsm
  v8::internal::FunctionCallbackArguments::Call
  v8::internal::MaybeHandle<v8::internal::Object> v8::internal::HandleApiCallHelpe
  
Regressed: https://cluster-fuzz.appspot.com/revisions?job=linux_msan_d8&range=369073:369111

Minimized Testcase (0.08 Kb):
Download: https://cluster-fuzz.appspot.com/download/AMIfv96yz6kGxEdiFCjBIXPDZuW7OMx9M_x1GCXNfdH68DkGB_H1pgwHIKMVnNYYGOGZN7Y1wsZbpVKdr7AA0sZW4Yl-rxMSzwGuMk0goemof7WMos6cHSaB-x-vSeiqsBOr0_JZEkH0Z-L1oVAJeOwB1C0kEUzoyw
var __v_3 = "";
    var module = _WASMEXP_.instantiateModuleFromAsm(__v_3);
( {
});


Filer: machenbach

See https://dev.chromium.org/Home/chromium-security/bugs/reproducing-clusterfuzz-bugs for more information.