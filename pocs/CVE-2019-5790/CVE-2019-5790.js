let s = String.fromCharCode(0x4141).repeat(0x10000001) + "A";
s = "'"+s+"'";
eval(s);