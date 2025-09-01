'use strict';

const options = {
  style: 'currency',
  currency: 'RUB'
}

console.log(23000);
console.log(new Intl.NumberFormat('ru-RU', options).format(23000))
