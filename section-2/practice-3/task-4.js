const dog = {
  sound: "bark",
  greet() {
    setTimeout(() => {
      console.log(this.sound);
    }, 0);
  }
};

dog.greet();
