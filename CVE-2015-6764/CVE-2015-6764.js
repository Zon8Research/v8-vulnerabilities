var array = [];
var funky = {
  toJSON: function() { array.length = 1; return "funky"; }
};
for (var i = 0; i < 10; i++) array[i] = i;
array[0] = funky;
JSON.stringify(array);
