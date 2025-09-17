'use strict';
// abstraction VS encapsulation
// - Название
// - Режиссер
// - Наш рейтинг 
// - Длительность 
// - страна произвотсв
// - Актеры
// - Трейлеры
// ... 

class Film {
  #name;
  #author;
  rating;
  #length;

  constructor(name, author,length) {
    this.#name = name;
    this.#author = author;
    this.#length = length;
  }

  get name() {
    return this.#name;
  }
  get author() {
    return this.#author;
  }
  get length() {
    return this.#length;
  }
}

const film = new Film('Transformer', 'Gen Loker', '1.20h');

console.log(film)
