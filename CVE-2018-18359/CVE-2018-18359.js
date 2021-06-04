a = function(){ return {}; };
b = function(){ return {}; }; 
c = Proxy; 
foo = function(){  Reflect.construct(a,b,c); }; 
foo()