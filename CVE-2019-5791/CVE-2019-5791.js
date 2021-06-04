callFn = function (code) {
  try { code(); } catch (e) { console.log(e); }
}

let proxy = new Proxy({}, {});

function run(prop, ...args) {
  let handler = {};
  const proxy = new Proxy(function () {}, handler);
  handler[prop] = (({v1 = ((v2 = (function () {
    var v3;
    var callFn = 0;
    if (asdf) {
      return;
    } else {
      return;
    }
    (function () { v3(); });
    (function () { callFn = 0x41414141; });
  })) => (1))() }, ...args) => (1));
  Reflect[prop](proxy, ...args);
}

callFn((() => (run("construct", []))));
callFn((() => (run("prop1"))));
callFn((() => (run("prop2"))));