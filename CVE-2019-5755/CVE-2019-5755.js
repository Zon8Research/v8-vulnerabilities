function foo(trigger) {
  return Object.is((trigger ? -0 : 0) - 0, -0);
}

console.log(foo(false));
%OptimizeFunctionOnNextCall(foo);
console.log(foo(true)); // expected: true, got: false