function printPowsOfTwo(limit) {
  switch (typeof limit) {
    case "number":
      let base = 2;

      for (let exp = 0, pow = 0; pow * base <= limit; exp++) {
        pow = base ** exp;
        console.log(pow);
      }

      break;
    default:
      console.log("Incorrect type");
  }
}

printPowsOfTwo("302");
printPowsOfTwo(null);
printPowsOfTwo(128);
printPowsOfTwo(60);
