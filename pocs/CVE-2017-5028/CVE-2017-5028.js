__proto__.__proto__.__proto__.__proto__.__proto__=new Proxy(__proto__,{
        has:function f(target,name){
                var str = f.caller.toString();
                alert(str);
        }
});