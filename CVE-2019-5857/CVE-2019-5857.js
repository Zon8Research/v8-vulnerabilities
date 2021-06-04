function opt(flag) {
    return -0 != (flag ? null : -9007199254740991);
}
ret = opt(false)
print(ret);
for(var x=0; x<100000; x++) opt(false);
ret = opt(true)
print(ret);