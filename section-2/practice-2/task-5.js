function removeObjectByProperty(array, key, value) {
  const result = array.filter((property) => property[key] === value);
  console.log(result);
}

const foo = [{ age: 1 }, { age: 2 }, { age: 2 }, { year: 2 }];
removeObjectByProperty(foo, "age", 2);
removeObjectByProperty(foo, "year", 2);
