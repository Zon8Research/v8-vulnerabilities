Detailed report: https://cluster-fuzz.appspot.com/testcase?key=6043736092966912

Fuzzer: Mbarbella_js_mutation
Job Type: Linux_v8_d8_be

Crash Type: UNKNOWN
Crash Address: 0x0000ffff8002
Crash State:
  v8::internal::Code::deoptimization_data
  v8::internal::OptimizedFrame::Summarize
  v8::internal::Isolate::CaptureSimpleStackTrace
  
Regressed: V8: r26123:26146

Minimized Testcase (0.40 Kb):
Download: https://cluster-fuzz.appspot.com/download/AMIfv96JYjlzyIP6xYzfhY8B82KDhJFDJSgFFFVIZJQon7tHyYH0kaoUdhkUlEXZVUlIFU-4R0EqhRbw1hDj_EgMWrfy4Do3KxMO7lVto7a9_HY5peU-faFtxIpjRhBHM3skxU2AGp3a91-2NtlY4JpOw2cp4RzO7Q
function __f_30(__f_26) {
  function __f_4() {
    var __v_21 = [      [],      function() {
      }(),
      new WeakMap,
      new WeakSet    ];
  }
  if (__f_26.length === 1) {
      var __v_17 = __f_4();
      __f_26();
  }
}
function __f_14(__v_17) {
  __v_17.x = 4;
}
try {
__f_30(__f_14);
} catch(e) {; }
function __f_12(__v_17) {
  with (__v_17) {
    assertEquals(2, __v_34);
  };
}
__f_30(__f_12);


Filer: mbarbella