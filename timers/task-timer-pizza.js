function pizzaTimer(time) {
  let formatTimes = new Intl
  const interval = setInterval(() => {
    console.log(``)
  }, 1000);
  setTimeout(() => {
    clearInterval(interval)
    console.log('!!!')
  }, time);
}

pizzaTimer(1000)
