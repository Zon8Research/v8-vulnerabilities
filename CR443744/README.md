Detailed report: https://cluster-fuzz.appspot.com/testcase?key=5498422793601024

Fuzzer: Mbarbella_js_mutation
Job Type: Linux_asan_d8

Crash Type: UNKNOWN
Crash Address: 0x4494000090e0
Crash State:
  v8::internal::Invoke
  v8::internal::Execution::Call
  v8::Script::Run
  
Regressed: V8: r25720:25861

Minimized Testcase (0.34 Kb):
Download: https://cluster-fuzz.appspot.com/download/AMIfv97qH2yxMqPnZ9HzTCP_W_rEpPswtG9npGAb4etvbgZssVU0XsrW9V9rORHt3f2fhC86dJ_lUCIkL7g_edvJmcvlO8OgVZQ-93o4-XubEzll41rjc38wjQ7T7FWHSVpvqtN24uRIv3Q6HDB0vtOE6BDTr-OYeQ
try {
( {
})();
} catch(e) {; }
function __f_2(stdlib, foreign, heap) {
  "use asm";
  var __v_3 = new stdlib.Uint8Array(heap);
  function __f_3(__v_1, v) {
    __v_1 = __v_1|0;
    __v_3[__v_1] = v;
  }
  return { __f_3: __f_3 };
}
__v_2 = __f_2(this, {},1);
for (var __v_1 = -926426868; __v_1 < 74; ++__v_1) {
  __v_2.__f_3(__v_1 * 1 * 32 * 1024);
}


Filer: mbarbella