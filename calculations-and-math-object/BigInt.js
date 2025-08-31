'use strict';

const max = 2**53 - 1 
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(max);
console.log(max + 1);
console.log(max + 2);
console.log(max + 3);

console.log(23456789034567898765432345678n)
console.log(BigInt('23456789034567898765432345678'));
