function printUniqueElements(array) {
  const result = array.reduce((acc, value) => {
    if (!acc.includes(value)) {
      acc.push(value);
    }

    return acc;
  }, []);

  console.log(result);
}

printUniqueElements([2, 3, 1, 3, 3, 7]);
