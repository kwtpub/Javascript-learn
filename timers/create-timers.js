
console.log(1)

const messages = ['BOOM', 'Bash']

const timer = setTimeout((mess1,mess2) => {
  console.log(mess1)
  console.log(mess2)
}, 1000, messages);

console.log(timer)
clearTimeout(timer)
