class Foo {
  constructor() {
    this.timeoutID = setTimeout(() => {
      this.name = null;
    }, 5000);
  }

  cancelTimeout() {
    clearTimeout(this.timeoutID);
  }

  name;
}
