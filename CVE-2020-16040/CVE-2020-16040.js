function jit_func(a, b) {
  var v921312 = 0xfffffffe;
  let v56971 = 0;  
  var v4951241 = [null, (() => {}), String, "string", v56971];
  let v129341 = [];

  v921312 = NaN;

  if (a != NaN) { 
      v921312 = (0xfffffffe)/2; 
  }

  if (typeof(b) == "string") { 
      v921312 = Math.sign(v921312); 
  }

  v56971 = 0xfffffffe/2 + 1 - Math.sign(v921312 -(-0x1)|6328);

  if (b) {
    v56971 = 0;
  }

  v129341 = new Array(Math.sign(0 - Math.sign(v56971)));
  v129341.shift();
  v4951241 = {};
  v129341.shift();

  v4951241.a = {'a': v129341};  

  for (let i = 0; i < 7; i++)
  {
    v129341[5] = 2855;
  }

  return v4951241;
}

%PrepareFunctionForOptimization(jit_func);

jit_func(undefined, "KCGKEMDHOKLAAALLE").toString();

%OptimizeFunctionOnNextCall(jit_func);

jit_func(NaN, undefined).toString();
