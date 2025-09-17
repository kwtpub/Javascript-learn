'use strict';

const Book = function(title, auth) {
  this.author = auth;
  this.title = title;
  this.isRead = false;
  // this.read() = function() {
  //   this.idRead = true;      Не правильно 
  // }
}
Book.prototype.read = function() {
  this.isRead = true;
}
Book.prototype.cover = 'Paper'
const lordOftheRing = new Book('Lord of the ring', 'Tolkien');
lordOftheRing.read()

console.log(lordOftheRing)
console.log(lordOftheRing.cover)
console.log(lordOftheRing.hasOwnProperty('cover'))
console.log(lordOftheRing.hasOwnProperty('author'))


console.log(lordOftheRing.__proto__);
console.log(lordOftheRing.__proto__ === Book.prototype);
console.log(Book.prototype.isPrototypeOf(lordOftheRing));
console.log(Book.prototype.isPrototypeOf(Book));

Array.prototype.slice = function() {
  console.log('IDI NAXUI')
}

const a = [5]
console.log(a.slice())
