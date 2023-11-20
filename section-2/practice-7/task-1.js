// Отримати список користувачів з віддаленого ресурсу /users.
// Використати fetch.
// Очікуваний результат - масив користувачів.

fetch("https://jsonplaceholder.typicode.com/albums")
  .then((response) => {
    if (response.ok) {
      return response.json();
    }

    throw new Error();
  })
  .then((value) => console.log(value))
  .catch((err) => console.error(err.message));
