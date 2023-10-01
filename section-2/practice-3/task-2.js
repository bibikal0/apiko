const car = {
  brand: "Tesla",
  model: "X"
};

function printCarInformation() {
  console.log(this.brand, `Model ${this.model}`);
}

printCarInformation = printCarInformation.bind(car);
printCarInformation();
