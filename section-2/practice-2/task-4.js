function findUser(user) {
  const result = Object.entries(user).reduce((acc, [key, value]) => {
    if (value.age > 18 && value.city === "London") {
      acc.push(key);
    }

    return acc;
  }, []);

  console.log(result);
}

findUser({ Max: { age: 23, city: "London" }, Mike: { age: 20, city: "NY" } });
