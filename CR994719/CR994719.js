class C extends Object {
  constructor() {
    var f = () => this;
    super();
    f();
  }
}

new C();
