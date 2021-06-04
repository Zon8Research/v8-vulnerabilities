<b>VULNERABILITY DETAILS</b>
v8/src/v8natives.js: ObjectFreezeJS, ObjectSealJS, ObjectIsFrozen and ObjectIsSealed use ObjectGetOwnPropertyNames, but ObjectGetOwnPropertyNames skips symbol valued property keys. This makes it possible to bypass security checks from Caja (https://github.com/google/caja), therefore I've filed this bug as a sec-issue instead of a normal issue report for the v8 bug tracker.


<b>VERSION</b>
Chrome Version: 45.0.2454.101 + stable
Operating System: Ubuntu 15.04 (64-bit)

Also applies to current v8 from master branch (35d2028d10668e69c1a71fb17b65eabbf2254982).


<b>REPRODUCTION CASE</b>

Test cases for Object.seal:
---
Expected: Returns 123
Actual: Returns undefined

(function(a) {
  var sloppy = arguments, sym = Symbol();
  sloppy[sym] = 123;
  Object.seal(sloppy);
  delete sloppy[sym];
  return sloppy[sym];
})(1);


Expected: Returns 123
Actual: Returns undefined

var obj = {}, sym = Symbol();
obj[sym] = 123;
Object.observe(obj, () => {});
Object.seal(obj);
delete obj[sym];
obj[sym];
---


Test cases for Object.freeze:
---
Expected: Returns 123
Actual: Returns undefined

(function(a) {
  var sloppy = arguments, sym = Symbol();
  sloppy[sym] = 123;
  Object.freeze(sloppy);
  delete sloppy[sym];
  return sloppy[sym];
})(1);


Expected: Returns 123
Actual: Returns undefined

var obj = {}, sym = Symbol();
obj[sym] = 123;
Object.observe(obj, () => {});
Object.seal(obj);
delete obj[sym];
obj[sym];
---


Test case for Object.isFrozen:
---
Expected: Returns false
Actual: Returns true

Object.isFrozen(Object.preventExtensions({[Symbol()]: 123}))
---


Test case for Object.isSealed:
---
Expected: Returns false
Actual: Returns true

Object.isSealed(Object.preventExtensions({[Symbol()]: 123}))
---