function Calculator(a, b) {
  this.a = a;
  this.b = b;
}

Calculator.prototype.add = function() {
  return this.a + this.b;
};

Calculator.prototype.subtract = function() {
  return this.a - this.b;
};

function AdvancedCalculator(a, b) {
  Calculator.call(this, a, b);
}

Object.setPrototypeOf(AdvancedCalculator.prototype, Calculator.prototype);

AdvancedCalculator.prototype.multiply = function() {
  return this.a * this.b;
};

AdvancedCalculator.prototype.divide = function() {
  return this.a / this.b;
};
