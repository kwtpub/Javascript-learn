'use strict';

const wetherMap = new Map([
  ['London', '10'],
  ['Moscow', '7']
])
console.log(wetherMap);

const object = {
  london: 10, 
  moscow: 7,
  paris: 14
};

console.log(Object.entries(object)) 
const weatherMap2 = new Map(Object.entries(object))
console.log(weatherMap2)
