const array = ["CusTom", "Web", "aNd", "MoBile", "PlaTfoRms"];

const compose = (...args) => (array) =>
  args.reduce((acc, value) => value(acc), array);

const modify = (modifier) => (array) =>
  array.map((value) => modifier(value));

const capitalized = compose(
  modify((value) => value[0].toUpperCase() + value.slice(1)),
  (value) => value.join("-")
)(array);

const inLowerCase = compose(
  modify((value) => value.toLowerCase()),
  (value) => value.join(" - ")
)(array);

console.log(`Result: ${capitalized}. Length: ${capitalized.length}`);
console.log(`Result: ${inLowerCase}. Length: ${inLowerCase.length}`);
