'use strict';

function goToFetch(url,error) {
  return fetch(url)
    .then((res) => {
      if(!res.ok) throw new Error (error)
      return res.json();
    })
}
goToFetch('https://dummyjson.com/productss', 'Хуйня ссылка')
// const el =  document.getElementById('1')
// fetch('https://dummyjson.com/productss')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`Is error ${response.status}`)
//     }
//     return response.json()
//   })
//   .catch(error => {
//     console.log('поймал:', error); // вот оно
//     // el.innerHTML =  error
//   })
