Detailed report: https://cluster-fuzz.appspot.com/testcase?key=4762885396365312

Fuzzer: Mbarbella_js_mutation
Job Type: Linux_asan_d8_dbg

Crash Type: Heap-buffer-overflow WRITE 1
Crash Address: 0x609000092b40
Crash State:
  v8::internal::JSTypedArray::MaterializeArrayBuffer
  v8::internal::JSTypedArray::GetBuffer
  v8::internal::Runtime_TypedArrayGetBuffer
  
Regressed: V8: r28977:28978

Minimized Testcase (0.35 Kb):
Download: https://cluster-fuzz.appspot.com/download/AMIfv96XucS_fqlb8UV3kF0sqibQxsqsokFjD8qrkOArLwWYBpiiqoWT2zHt1ZU4WfYUBXyCqblgto6HcLxmFV_eyIeENPHtiVnlpTgf2oUOxH3THIrU8c4YBBJUAnks98r6HTT5GObbN7XJrUWnSO9BqBUABjxx0Q
function __f_10(constructor, item, expectedResultLen, expectedStartIndex,
                          initialLen) {
  var __v_45 = new constructor(initialLen);
  var __v_52 = __v_45.subarray();
}
function __f_19(constructor, item) {
  __f_10(constructor, item, 112, 0,       1073741823);
  __f_10(constructor, item, 1073741823, 0,       1);
}
__f_19(Uint8Array);


Filer: machenbach