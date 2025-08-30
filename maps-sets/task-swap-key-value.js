'use strict';

let weatherMap = new Map([
  ['London', 10],
  ['Moscow', 7],
  ['Paris', 14]
])
weatherMap = new Map([...weatherMap].map(el => el.reverse()));
console.log(weatherMap)

  /* method 1 */
// let tempMap = new Map()
// for (const [key, value] of weatherMap) {
//    tempMap.set(value, key)
// }
//
// weatherMap = tempMap
//
// console.log(weatherMap)

