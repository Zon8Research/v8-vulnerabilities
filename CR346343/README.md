Detailed report: https://cluster-fuzz.appspot.com/testcase?key=6204222315954176

Uploader: mbarbella@google.com
Job Type: Linux_asan_d8

Crash Type: UNKNOWN
Crash Address: 0x000100000007
Crash State:
  - crash stack -
  NULL

Minimized Testcase (0.14 Kb):
Download: https://cluster-fuzz.appspot.com/download/AMIfv94Nps3eTMVR7cizLsmhjUX3Q7GJrJm61P-Ws5rPVSzWRVQ-5IAjJ9mMdSRQbBe0eD_7020yjJ8C02qcYmh72HsmJbXv8f2kRJjM4WCWbq90hYFy17TmP9dTpJR27swymg09ChC0caD6_ZFIPBqmKH77oxOJ2w
function f(o) {
  var i = 1;
  while (i < 2) {
    var y = o.y;
    i++;
  }
}
f({y:1.1}, [1]);
f({y:1.1}, [1]);
while(true) f({z:1});