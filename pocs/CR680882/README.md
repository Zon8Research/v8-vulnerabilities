Detailed report: https://cluster-fuzz.appspot.com/testcase?key=4644371816513536

Fuzzer: mbarbella_js_mutation
Job Type: linux_msan_d8
Platform Id: linux

Crash Type: Use-of-uninitialized-value
Crash Address: 
Crash State:
  v8::internal::interpreter::BytecodeRegisterOptimizer::RegisterTransfer
  v8::internal::interpreter::BytecodeArrayBuilder::StoreAccumulatorInRegister
  v8::internal::interpreter::BytecodeGenerator::BuildVariableAssignment
  
Sanitizer: memory (MSAN)

Recommended Security Severity: Medium

Regressed: https://cluster-fuzz.appspot.com/revisions?job=linux_msan_d8&range=435933:436006

Minimized Testcase (0.08 Kb):
Download: https://cluster-fuzz.appspot.com/download/AMIfv97JJDXdf--OU3UyoKdRJe8o3NGmQ2q_hJtWXdVH1eXAGRCC1urNE2b_-Lm-1KvZOjZmIbCWlToyHFc0RE6-USqKYlRxYaLp6nxO06n-24gh4srOsPlq_G7g0x8O6h-5Y305rmCXbQ4mu4kxZAh0xchOKj85yO0sTHIrhiyw6DedZ2QPyVlq1zF_-MSiZupEzl39SQNkbQdeOwnGTuJJeyvMNOMCbmcOhEvwHHY1VALiZzQrdaeD5K5knwegVa4DoPfiyl6r9MHsJKGOlkEgHZ0OvV86aZZn7aEz8Ois_o4iGfTUo6UcLCjdH5fbt3MRZQxcAM6efRDM73M_Vra5dk4gC4YwgCl_F9aMEVOZml0haZ_yNZnHb8St_Kvg5xqApG0i0JJmgWI-ZykJuqfzrkdrafebeA?testcase_id=4644371816513536
try {
for (var __v_1 of __v_0) {
}
((e = ({} = {} = {})) => {})()
} catch(e) {; }


Issue filed automatically.

See https://dev.chromium.org/Home/chromium-security/bugs/reproducing-clusterfuzz-bugs for more information.