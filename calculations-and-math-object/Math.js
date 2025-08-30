'use strict';

console.log(Math.sqrt(36))
console.log(Math.cbrt(27))
console.log(16 ** (1/4))

console.log(Math.abs(-100));
console.log(Math.abs(35));

console.log(Math.sign(-100));
console.log(Math.sign(35));

console.log(Math.exp(3));

console.log(Math.max(1,2,3,4,5,6,7,8));
console.log(Math.max(1,2,3,4,5,6,7,8, '12ex'));

console.log(Math.min(1,2,3,4,5,6,7,8));
console.log(Math.min(1,2,3,4,5,6,7,8, '12ex'));

const arr = [1,-2,10,0, 19];
console.log(Math.max(...arr))

console.log((Math.random() * 100).toFixed(0))
