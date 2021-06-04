Detailed report: https://cluster-fuzz.appspot.com/testcase?key=6511888339304448

Fuzzer: Mbarbella_js_mutation
Job Type: Linux_asan_d8

Crash Type: UNKNOWN
Crash Address: 0x7f6428100000
Crash State:
  v8::internal::Invoke
  v8::internal::Execution::Call
  v8::internal::Object::GetPropertyWithDefinedGetter
  
Regressed: V8: r27183:27191

Minimized Testcase (0.35 Kb):
Download: https://cluster-fuzz.appspot.com/download/AMIfv97rYWM6d5Ey-BrRHR2WBvij5mKkG-JaQPdRVPwDnW1_JN1ZOFWFKARyNwV6cKoUhPLdaNL_U7drSv0eW4HccMpM1AQV6HGPsXBOwj6vQZwHYFdehM9eKEcAvWfG7w4LnCh-EzeIUoKdWJL3okKZcddjc8YzPA
"use strict";
try {
} catch(e) {; }
(function __f_3() {
  class Base {
  }
  class Subclass extends Base {
    constructor() {
 arguments[1];
    }
  }
  Subclass.__defineGetter__('length', function() { return __f_11(Subclass); });
 Subclass.length;
}());
(function __f_8() {
  class Subclass extends Base {
  }
}());
function __f_11(f, expected) {
 f.call();
}


Filer: mbarbella