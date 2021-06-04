class MyRegExp extends RegExp {
  exec(str) {
    const r = super.exec.call(this, str);
    r[0] = 0; // Value could be changed to something arbitrary
    return r;
  }
}

'a'.match(new MyRegExp('.', 'g'));
