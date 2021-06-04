function __f_0() { this.x = this.x.x; }
gc();
__f_0.prototype.x = {x: 1}
new __f_0();
new __f_0();
function __f_9(ensure_fast_case) {
  function __f_12() {
  };
  __f_12.prototype = { set x(value) { this.y = 23; } };

    new __f_0();
}

__f_9();
__v_15.__defineGetter__();
