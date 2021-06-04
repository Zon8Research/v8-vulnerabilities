arr=[];
for (var i = 0; i < 100000; i++)
    arr[i] = [];
arr.indexOf(new Object(), {valueOf:function(){arr.length = 0}})
