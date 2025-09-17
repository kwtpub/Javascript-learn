
const prom = new Promise((resolve,reject) => {
  if (new Date() < new Date('01/01/2026')) {
    reject(new Error('error'));
  }
  resolve('Seccess')
})

prom
  .then(data => console.log(data))
  .catch(error => console.log(error))
