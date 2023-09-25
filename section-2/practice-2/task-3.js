function printStringElements(array) {
  const result = array.filter((value) => typeof value === "string");
  console.log(result);
}

printStringElements([2, "string", 3, , , "test"]);
