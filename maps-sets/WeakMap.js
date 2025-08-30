'use strict';
let a = {a: 1}
let b = {b: 1}
const map2 = new Map()
const map = new WeakMap();
map.set(a, 'testA');
map.set(b, 'testB');
console.log(map.get(a))
console.log(map.has(a))


a = null;
// setTimeout(() => {
// console.log(map)
// })

let cache = new WeakMap();

function getValue(obj) {
  if (!cache.has(obj)) {
    const res = 1;
    cache.set(obj, res)
  }
  return cache.get(obj);
}

let res = getValue(b);
console.log(res);
let res2 = getValue(b);
console.log(res2);
