function printSumOfArray() {
  const initialArray = [3, 2, "2", null, 1.5, 9.5, undefined];
  let sum = 0;

  for (let element of initialArray) {
    if (typeof element === "number") {
      sum += element;
    }
  }

  console.log(sum);
}

printSumOfArray();
