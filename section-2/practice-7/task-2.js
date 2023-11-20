// Отримати список усіх альбомів які належать користувачу з id - 10.
// Використати fetch.
// Після отримання відповіді від API, перевірити чи запит виконався успішно (чи знаходиться код відповіді в діапазоні 200-299).
// Вивести у консоль результат.

const baseURL = "https://jsonplaceholder.typicode.com";

fetch(`${baseURL}/users/10/albums`)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }

    throw new Error();
  })
  .then((value) => console.log(value))
  .catch((err) => console.error(err.message));
