// Створити нового користувача - зробити POST запит на ендпоінт 'https://jsonplaceholder.typicode.com/users'.
// Використати fetch.
// Для нового користувача вказати поля name, username, email.
// Оскільки дане API працює з JSON то body запиту повинне бути у JSON форматі.
// Вказати для запиту заголовок 'Content-type' з значенням 'application/json'.
// Після отримання відповіді від API, перевірити чи запит виконався успішно.
// Вивести у консоль результат.

const user = {
  name: "FirstName LastName",
  username: "UserName",
  email: "usermail@gmail.com",
};

const baseURL = "https://jsonplaceholder.typicode.com";

fetch(`${baseURL}/users`, {
  method: "POST",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify(user),
})
  .then((response) => {
    if (response.ok) {
      return response.json();
    }

    throw new Error();
  })
  .then((value) => console.log(value))
  .catch((err) => console.log(err.message));
