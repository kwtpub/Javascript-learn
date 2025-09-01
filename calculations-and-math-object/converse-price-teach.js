function convert(num,initialCurrency, convertCurrency) {
  const allCurrencyes = [
    {name: 'USD', mult: 1},
    {name: 'RUB', mult: 1/60},
    {name: 'EUR', mult: 1.1}
  ];
  const initial = allCurrencyes.find(c => c.name === initialCurrency)
  if (!initial){
    return null;
  }

  const convert = allCurrencyes.find(c => c.name === convertCurrency)
  if (!convert){
    return null;
  }
  return new Intl
    .NumberFormat('ru-RU', {style: 'currency', currency: convert.name}).format(num * initial.mult / convert.mult)
}
console.log(convert(10000, 'USD', 'RUB'))
