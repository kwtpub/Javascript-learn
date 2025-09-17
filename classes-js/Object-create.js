'use strict';

const User = {
  init(log,pass) {
    this.login = log;
    this.pass = pass 
  },
  log() {
    console.log('Log')
  }
};

const user = Object.create(User)
user.log()

console.log(user.__proto__ == User)
console.log(user)

const admin = Object.create(user)
console.log(admin)
admin.log() 
console.log(admin.log)
