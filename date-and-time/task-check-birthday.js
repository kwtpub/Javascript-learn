const user = {
  name: 'Vasya',
  birthday: '9/1/2022'
}

function idBirthday(user) {
  const nowDate = new Date() 
  const userBirhdayDate = new Date(user.birthday)
  if (nowDate.getMonth() == userBirhdayDate.getMonth() && nowDate.getDate() == userBirhdayDate.getDate()) {
    return true
  }
  return false
}
console.log(userHaveBirthday(user))
