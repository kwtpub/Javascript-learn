const Book = function(title, author) {
  this.title = title;
  this.author = author;
}

Book.prototype.buy = function() {
  console.log('Buy')
}

const AudioBook = function(title, author, lenMin) {
  Book.call(this ,title, author);
  this.lenMin = lenMin;
}
AudioBook.prototype = Object.create(Book.prototype);

AudioBook.prototype.log = function() {
  console.log(`${this.title}- ${this.lenmin}`)
}
AudioBook.prototype.constructor = AudioBook;

const book = new AudioBook('Lord XYI', 'TolXYU', 20 * 60);
book.log();
book.buy();
console.log(book)
console.log(AudioBook.prototype.constructor)

console.log(book instanceof AudioBook)
console.log(book instanceof Book)
