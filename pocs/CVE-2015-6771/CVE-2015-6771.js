var typedArray = new Int8Array(1);
var saved;
var called;
typedArray.constructor = function(x) { called = true; saved = x };
typedArray.constructor.prototype = Int8Array.prototype;
typedArray.map(function(){});
