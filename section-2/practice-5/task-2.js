function generateID() {
  return "_" + Math.random().toString(36).slice(2, 9);
}

class ToDoItem {
  constructor(name) {
    this.name = name;
  }

  id = generateID();
  isChecked = false;

  get getState() {
    return this.isChecked;
  }

  set setState(value) {
    if (typeof value === "boolean") {
      this.isChecked = value;
    }
  }
}

class ToDoList {
  constructor(name) {
    this.name = name;
  }

  id = generateID();
  items = [];

  addItems(items) {
    items.forEach((item) => {
      if (item instanceof ToDoItem) {
        this.items.push(item);
      }
    });
  }

  removeItemByID(id) {
    this.items = this.items.filter((item) => item.id !== id);
  }

  getItemByID(id) {
    return this.items.find((item) => item.id === id);
  }
}

const list = new ToDoList("new list");

const items = [
  new ToDoItem("first"),
  new ToDoItem("second"),
  new ToDoItem("third"),
  new ToDoItem("fourth"),
];

list.addItems(items);
console.log(list.items);
items[1].setState = true;
console.log(list.items);
list.removeItemByID(items[0].id);
list.removeItemByID(items[3].id);
console.log(list.items);
