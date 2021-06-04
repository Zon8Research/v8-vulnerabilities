The typer sets the type of Math.expm1 to be Union(PlainNumber, NaN).
This is missing the -0 case: Math.expm1(-0) returns -0.

Here's a quick example that showcases the issue:
```
function foo() {
  return Object.is(Math.expm1(-0), -0);
}

console.log(foo());
%OptimizeFunctionOnNextCall(foo);
console.log(foo());
```
% d8 --allow-natives-syntax expm1-poc.js
true
false

The buggy code is in two locations:
https://cs.chromium.org/chromium/src/v8/src/compiler/typer.cc?rcl=9680338c622d4693f984b49fb24d101acd2d8112&l=1437

https://cs.chromium.org/chromium/src/v8/src/compiler/operation-typer.cc?rcl=9680338c622d4693f984b49fb24d101acd2d8112&l=420


== security impact ==

I'm filing this is a security bug since similar bugs have been exploitable in the past (e.g. crbug/762874). However, I'm not sure if this is the case here. Here's my analysis so far:
The interesting cases I found that can make a distinction between 0 and -0 are division, atan2 and Object.is. The typing code doesn't handle minus zero in the first two cases, which leaves Object.is.
Afaict, the typer runs 3 times:
* in the typer phase
* in the TypeNarrowingReducer (load elimination phase)
* in the simplified lowering phase
After the first two typing runs, the ConstantFoldingReducer will run, so if we get the typer to mark the Object.is result to always be false at this point it will simply be replaced with a false constant.
That leaves the third typing round.
The Object.is call can be represented in two forms at that point. As a ObjectIsMinusZero node if an earlier pass knew that we compare against -0 or as a SameValue node.
The ObjectIsMinusZero case doesn't seem to be interesting since type information are not propagated in the UpdateFeedbackType function.
The feedback type for SameValue is propagated though and will be used for (now buggy) range computations.
But there's one detail that keeps this from being exploitable: since SameValue requires a tagged type, a ChangeFloat64ToTagged node will get inserted. Since the type information say that the input can never be -0, it will not include special minus zero handling which replaces the -0 with the smi 0.