'use strict';

const arrayUsers = ['Any', 'Maria', 'Pavel', 'Pavel', 'Maria'];
console.log(arrayUsers);

const setFlights = new Set(arrayUsers)

console.log(setFlights)
console.log(setFlights.size)
console.log(setFlights.has('Pavel'))
setFlights.add('Paris')
setFlights.add('Paris')
console.log(setFlights)

for( const flight of setFlights) {
  console.log(flight);
}
console.log([...setFlights]);

const setObj = new Set([{a: 1}, {b: 2}, {b: 2}])
console.log(setObj)
console.log(new Set('abcd'));
console.log(new Set([{a: 1, b:2}]))
