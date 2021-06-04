class MyRegExp extends RegExp {
  exec(str) {
    const r = super.exec.call(this, str);
    if (r) r.length=0;
    return r;
  }
}
const result = 'a'.match(new MyRegExp('.', 'g'));
var crash = result[0].x;
