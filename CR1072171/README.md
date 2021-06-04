<b>VULNERABILITY DETAILS</b>
In the Typer phase Math.max and Math.min generate the wrong type by mistakenly removing the Type::MinusZero property of the input nodes.

The faulty code is within the operation-typer.cc file here:
https://chromium.googlesource.com/v8/v8.git/+/refs/heads/master/src/compiler/operation-typer.cc#1051

In the cases that, for example, rhx is Type::MinusZero the following code: 
```
  rhs = Type::Intersect(rhs, cache_->kInteger, zone());
```

The aforementioned code will wrongly remove the Type::MinusZero and therefore rhs.IsNone() will yield true on the following lines of code:
```
   double min = std::max(lhs.IsNone() ? -V8_INFINITY : lhs.Min(),
                          rhs.IsNone() ? -V8_INFINITY : rhs.Min());
   double max = std::max(lhs.IsNone() ? -V8_INFINITY : lhs.Max(),
                          rhs.IsNone() ? -V8_INFINITY : rhs.Max());
   type = Type::Union(type, Type::Range(min, max, zone()), zone());
```


This will lead to cases in which the Type::Range(min, max, zone()) is wrongly computed due to the first run being Range(-1, -1) and the next Typer run, before crashing, starting on Range(1, 1). 

I haven't tried yet to exploit this behaviour but since it seems to omit the -0 case, which is similar to crbug/880207, I'm filing it as a security bug.

PROPOSED FIX for CASE 2:
```
  bool const lhs_maybe_minus_zero = lhs.Maybe(Type::MinusZero());
  bool const rhs_maybe_minus_zero = rhs.Maybe(Type::MinusZero());
  if (lhs_maybe_minus_zero)
    lhs = Type::Union(lhs, Type::MinusZero(), zone());
  if (rhs_maybe_minus_zero)
    rhs = Type::Union(lhs, Type::MinusZero(), zone());
  lhs = Type::Intersect(lhs, cache_->kInteger, zone());
  rhs = Type::Intersect(rhs, cache_->kInteger, zone());
```


<b>VERSION</b>
v8 commit: 350e0f7997fdb936510ecc6132e84533393c5066
Also hangs the renderer on the latest Chrome stable 
Operating System: All platforms.

<b>REPRODUCTION CASE</b>
CASE 1 
function crash() { 
for (a=0;a<2;a++)
    for (let i = -0.0; i < 1000; i++) { 
        confused = Math.max(-1, i);
    } 
    confused[0];
}

crash();
%OptimizeFunctionOnNextCall(crash);
crash();

CASE 2
function crash() {
    let confused;
    for (let i = -0.0; i < 1000; i++) {
        confused = Math.max(-1, i);
    }
    confused[0];
}

crash();
%OptimizeFunctionOnNextCall(crash);
crash();


<b>FOR CRASHES, PLEASE INCLUDE THE FOLLOWING ADDITIONAL INFORMATION</b>
Crash State: 
Case 1
 Trace/breakpoint trap (core dumped)
Case 2
 # Fatal error in , line 0
 # UpdateType error for node 75: NumberMax(73, 74)
   73: SpeculativeToNumber[NumberOrOddball, FeedbackSource(#5)](41, 71, 31)
   74: SpeculativeToNumber[NumberOrOddball, FeedbackSource(#5)](17, 73, 31)


<b>CREDIT INFORMATION</b>
Reporter credit: Javier Jimenez of SensePost (@n30m1nd). Also credit to Saelo and the AFL++ project.