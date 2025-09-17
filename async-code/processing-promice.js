'use strict';

fetch('https://dummyjson.com/products')
  .then(response => {
    console.log(response)
    return response.json()
  },
    // error => console.log(error)
  ) // преобразуем тело ответа в JSON
  .then(({products}) => {
    console.log(products)
    return fetch('https://dummyjson.com/products/' + products[0].id)
  }, 
    // error => console.log(error)
  )
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => console.log(error))
  .finally(() => {
    console.log('Finally')
  })

// console.log(res)
