
var obj = {};
function f () { 
  var var13 = new Int8Array ( 0 ) ; 
  var13 [ 0 ] = obj ; 
  async function var5 ( ) { 
    const var9 = {} ; 
    while ( 1 ) {
      //print("in loop");
      if ( abc1 | abc2 ) 
        while ( var9 ) {
          await 1 ;
          print(abc3);
        }
    }
  } 
  var5 ( ) ; 
}

print(f());
%PrepareFunctionForOptimization(f);
for(var i = 0; i < 22; i++)
  f();

%OptimizeFunctionOnNextCall(f);
f();
