function MjsUnitAssertionError(message) {
  this.stack = new Error("").stack;
}
  function PrettyPrint(value) {  }
  function fail(expectedText, found, name_opt) {
    var message = "Fail" + "ure";
    throw new MjsUnitAssertionError(message);
  };
  assertEquals = function assertEquals(expected, found, name_opt) {
      fail(PrettyPrint(expected), found, name_opt);
  };
  assertThrows = function assertThrows(code, type_opt, cause_opt) {
    throw new MjsUnitAssertionError("Did not throw exception");
  }
var value = (function(){
})();
try {
assertEquals(1, value);
} catch(exc1) {}
function defineSetter(o) {
}
function testfn(f) { return [1].map(f)[0]; }
try {
assertEquals(null, testfn(defineSetter));
} catch(exc1) {}
var str = "[1]";
for (var i = 0; i < 100000; i++ ) {
  str = "[1," + str + "]";
}
try {
assertThrows(function() { JSON.parse(str); }, RangeError);
} catch(exc1) {}
</script>
<script>
var s = "";
for (i = 0; i < (17592185913344); i++) {
  s = s + (i + (i+1));
  s = s.substring(s, (s + 0.5) << 1);
}
assertEquals(57, s.charCodeAt(0));