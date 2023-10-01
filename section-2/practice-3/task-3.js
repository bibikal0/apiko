const cat = {
  sound: "meow",
  greet() {
    setTimeout(function() {
      console.log(this.sound);
    }.bind(this), 0);
  }
};

cat.greet();
