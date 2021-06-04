(function JSCreate() {
  function f(arg) {
    const o = Reflect.construct(Object, arguments, Proxy);
    o.foo = arg;
  }
  f(0);
})();