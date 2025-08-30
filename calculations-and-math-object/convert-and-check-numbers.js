'use strict';

console.log(10 === 10.0);
// 0 1 
// 1/100 = 0.1 
// 1/3 = 0.333333333... 
console.log(0.2 + 0.2 === 0.4)
console.log(0.2 + 0.2);
console.log(0.1 + 0.2);

console.log(Number('10s'))
// console.log(10 + +'20')
console.log(Number.parseInt('11', 10))
console.log(Number.parseInt('11 sec', 10))
console.log(Number.parseInt('11', 10))

console.log(Number.parseFloat('11.5 sec', 10))
console.log(Number.parseFloat('11.5 ', 10)) //NaN
console.log(Number.parseFloat('sec 11.5', 10)) //NaN

console.log(Number.isNaN(Number('11ad')))
console.log(Number.isNaN(10 / 0))
