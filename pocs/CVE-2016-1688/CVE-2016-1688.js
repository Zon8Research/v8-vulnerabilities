var ARROW_ARG = /^([^\(]+?)=>/;

var fn = foo => { foo(); }

var args = fn.toString().match(ARROW_ARG);
// ["foo =>", "foo ", index: 0, input: "foo => { foo(); }"]
var args2 = fn.toString().match(ARROW_ARG);
// null in Chrome 50
