function Ctor() {
  n = new Set();
}
function Check() {
  n.xyz = 0x826852f4;
  parseInt();
}
for(var i=0; i<2000; ++i) {
  Ctor();
}
for(var i=0; i<2000; ++i) {
  Check();
}
Ctor();
Check();
