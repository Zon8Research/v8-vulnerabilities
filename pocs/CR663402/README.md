<b>VULNERABILITY DETAILS</b>

The arm32 implementation of V8's MacroAssembler::Allocate(int object_size, ...) can get confused about its handrolled object_start + object_size computation: the "add" instructions (except for the first) erroneously use the "cc" condition (carry bit set), which is not updated by the allocation code sequence, but inherited from whatever code ran before. This results in a too-low object_end being compared against the allocation limit. The allocation appears to succeed, but the returned object has a larger size than what was checked and recorded, so it might extend beyond the end of the current page, or overlap with the next object.


<b>VERSION</b>
Chrome Version: 52 to ToT
Operating System: all arm32 platforms (Android, ChromeOS)


<b>REPRODUCTION CASE</b>

// Flags: --allow-natives-syntax

var g_eval = eval;
function emit_f(size) {
  var body = "function f(x) {" +
             "  if (x < 0) return x;" +
             "  var a = [1];" +
             "  if (x > 0) return [";
  for (var i = 0; i < size; i++) {
    body += "0.1, ";
  }
  body += "  ];" +
          "  return a;" +
          "}";
  g_eval(body);
}

// Length must be big enough to make the backing store's size not fit into
// a single instruction's immediate field (2^12).
var kLength = 701;
emit_f(kLength);
f(1);
f(1);
%OptimizeFunctionOnNextCall(f);
var a = f(1);

// Allocating something else should not disturb |a|.
var b = new Object();
for (var i = 0; i < kLength; i++) {
  assertEquals(0.1, a[i]);
}

// Allocating more should not crash.
for (var i = 0; i < 300; i++) {
  f(1);
}


<b>FOR CRASHES, PLEASE INCLUDE THE FOLLOWING ADDITIONAL INFORMATION</b>
Type of crash: tab
Crash State: segfault
