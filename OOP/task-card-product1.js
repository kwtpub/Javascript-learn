'use strict';

const product = {id: 1, name: 'Bread', count: 1}
const product2 = {id: 2, name: 'Party', count: 1}

const Card = function(userId, authCode) {
  this.userId = userId;
  this.authCode = authCode;
  this.card = []
}


Card.prototype.addProduct = function(product) {
  this.card.push(product)
}
Card.prototype.upperCount = function(name){
  const product = this.card.find(el => el.name == name)
  if (product) {
    product.count += 1
  } else {
    console.log('Product not found')
  }
}
Card.prototype.downCount = function(name){
  const product = this.card.find(el => el.name == name)
  if (product) {
  if(product.count == 1) {
    const result = this.card.filter(el => el != product)
    this.card = result
  }
  product.count -= 1 
  } else {
    console.log('product not found')
  }
}

const basicCard = new Card() 
basicCard.addProduct(product)
basicCard.addProduct(product2)
basicCard.upperCount('Bread')
basicCard.downCount('Bread')
basicCard.downCount('Bread')
console.log(basicCard)
