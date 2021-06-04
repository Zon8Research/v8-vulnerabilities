var array = [[{}], [1.1]];

function transition() {
  for(var i = 0; i < array.length; i++){
    var arr = array[i];
    arr[0] = {};
  }
}

var double_arr2 = [1.1,2.2];

var flag = 0;
function swap() {
  try {} catch(e) {}  // Prevent Crankshaft from inlining this.
  if (flag == 1) {
    array[1] = double_arr2;
  }
}

var expected = 6.176516726456e-312;
function f(){
  swap();
  double_arr2[0] = 1;
  transition();
  double_arr2[1] = expected;
}

// %OptimizeFunctionOnNextCall(f);
for(var i = 0; i < 0x10000; i++) {
  f();
}
flag = 1;
f();
assertEquals(expected, double_arr2[1]);
