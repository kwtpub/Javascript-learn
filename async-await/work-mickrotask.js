"use strict";


console.log(1);

setTimeout(() => {
  console.log(2)
}, 0);
Promise.resolve(3).then((res) => {
  console.log(res)
  for(let i = 0; i < 100000; i++) {
  
  }
});

console.log(4)

// for(i = 0; i < 100000; i++) {

// }
