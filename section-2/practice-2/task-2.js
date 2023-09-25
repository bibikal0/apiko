function areElementsEven(array) {
  const result = array.every((value) => value % 2 === 0);
  console.log(result ? "YES" : "NO");
}

areElementsEven([1, 2, 3, 9]);
areElementsEven([2, 4, 6]);
