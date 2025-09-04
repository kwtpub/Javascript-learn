function pizzaTimer(time) {
  const options = {
    minute: "2-digit",
    second: "2-digit"
  }
  let dateTime = (new Date()).setTime(time);  
  let formatTimes = new Intl.DateTimeFormat("ru-RU", options).format(dateTime)
  const interval = setInterval(() => {
    console.log(formatTimes)
    time = time - 1000
    dateTime = (new Date()).setTime(time);
    formatTimes = new Intl.DateTimeFormat("ru-RU", options).format(dateTime)
  }, 1000);
  setTimeout(() => {
    clearInterval(interval)
    console.log('!!!')
  }, time+500);
}

pizzaTimer(8000)
