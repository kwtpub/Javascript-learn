'use strict';

class User {
  #login;
  #password;

  constructor(password, login) {
    this.#login = login;
    this.#password = this.#reversePass(password);
  }

  #reversePass(password) {
    return [...password].reverse().join('').toString()
  }

  get getLogin() {
    return `Ваш логин: ${this.#login}`
  }
  changePassword(oldPassword, newPassword) {
    if (this.#reversePass(oldPassword) === this.#password) {
      this.#password = this.#reversePass(newPassword);
      console.log('Password changed')
    } else {
      console.log('Старый пароль не правильный')
      return;
    }
  }
  CheckPassword(password) {
    return password === this.#reversePass(this.#password) 
    ? 'Пароль верный'
    : 'Пароль не верный'
  }
  
}
const user = new User('1234', 'petya')
user.changePassword('1234', '123456789')
console.log(user.CheckPassword('123456789'))
console.log(user.getLogin)


// teacher 
