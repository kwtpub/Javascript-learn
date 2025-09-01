function convertPrice(sum,currency1, currency2 ) {
  const RUB_TO_USD = 81
  const RUB_TO_EUR = 93
  const mountOption = (currencyLocal) => {
    return options = {
      style: "currency",
      currency: currencyLocal
    } 
  }
  if (currency1 == 'RUB') {
    if (currency2 == 'USD') {
      sum = sum / RUB_TO_USD
      return Intl.NumberFormat("ru-RU", mountOption(currency2)).format(sum)
    }
    else if (currency2 == 'EUR'){
      sum = sum / RUB_TO_EUR
    }
  }

  
  if (currency1 == 'USD') {
    if (currency2 == 'RUB') {
      sum = sum * RUB_TO_USD
      return Intl.NumberFormat("ru-RU", mountOption(currency2)).format(sum)
    }
    else if (currency2 == 'EUR'){
      sum = sum * (RUB_TO_USD  / RUB_TO_EUR)
    }
  }


  if (currency1 == 'EUR') {
    if (currency2 == 'USD') {
      sum = sum * (RUB_TO_EUR / RUB_TO_USD)
      return Intl.NumberFormat("ru-RU", mountOption(currency2)).format(sum)
    }
    else if (currency2 == 'RUB'){
      sum = sum * RUB_TO_EUR
    }
  }

return null
}

console.log(convertPrice(1000, 'USD','RUB'))
