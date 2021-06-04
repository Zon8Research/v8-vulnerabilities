var str=""
for(var i=0;i<0x2000;i++)
str+="(?<a"+i+">)|";
str+="(?<b>)"
var regexp= new RegExp(str);
m = "xxx".match(regexp);
