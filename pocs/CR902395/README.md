<b>VULNERABILITY DETAILS</b>
The following testcase crashes the latest debug build of d8. It requires the --allow-natives-syntax flag

<b>VERSION</b>
Chrome Version: asan-v8-arm-linux-debug-605663
Operating System: Linux 64bit ARM64 (native and simulator)

<b>REPRODUCTION CASE</b>

function opt(ar){
  try{
    Object.seal({})
  }finally{
    try{
      (
        {
          toString(){
          }
        }
      ).apply(-1).x(  )
    }
    finally{
      if(2.2)
      {
        return
      }
      try{
        Reflect.construct
      }finally{
      }
    }
  }
}
try{opt([])}catch{}
%OptimizeFunctionOnNextCall(opt);
try{opt([])}catch{}

<b>FOR CRASHES, PLEASE INCLUDE THE FOLLOWING ADDITIONAL INFORMATION</b>

Crash State: 
#
# Fatal error in ../../v8/src/compiler/bytecode-graph-builder.cc, line 317
# Debug check failed: values_[index] != builder()->jsgraph()->OptimizedOutConstant() (0xe2814ac8 vs. 0xe2814ac8).
#
#
#

