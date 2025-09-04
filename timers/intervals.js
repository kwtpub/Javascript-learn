'use strict';


const interval = setInterval(() => {
  console.log(new Date());
}, 1000);

const timer = setTimeout(() => {
  clearInterval(interval)
  console.log("boom")
}, 5200);

console.log(interval)
console.log(timer)
