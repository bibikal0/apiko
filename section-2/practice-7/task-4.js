// Написати функцію getAlbum(id), яка буде приймати id альбому який потрібно отримати.
// Функція getAlbum повинна повертати проміс, який у разі успішного виконання повертає дані альбому.
// Написати функцію getSpecifiedAlbums(ids = []), яка буде приймати масив ids з значеннями id для альбомів які потрібно отримати.
// Функція getSpecifiedAlbums() повинна повертати проміс, який у разі успішного виконання повертає масив вказаних альбомів.
// У разі успішного виконання промісу з getSpecifiedAlbums, вивести у консоль результат.

function getAlbum(id) {
  return fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error();
    })
    .catch((err) => Promise.reject(err));
}

function getAlbums(ids) {
  return Promise.all(ids.map((id) => getAlbum(id)));
}

getAlbums([1, 15]).then(
  (values) => console.log(values),
  (err) => console.error(err.message),
);
