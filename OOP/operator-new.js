const User = function(email, password) {
  this.email = email;
  this.password = password + '$$$';
}

const user1 = new User('a@a.ru', '123')
console.log(user1)

const user2 = new User('a@a2.ru', '1234')
console.log(user2)

console.log(user2 instanceof User)

// Содается пустой обьект 
// Вызывается User функция 
// this = пустому обьекту 
// обтект связывается с прототипом с prototype 
// возврощается обьект 
