const person = {
  firstName: "John",
  lastName: "Doe",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

function printPersonInformation(interests) {
  const information = `${this.getFullName()} likes: ${interests.join(", ")}`;
  console.log(information);
}

printPersonInformation.call(person, ["sushi", "hiking"]);
