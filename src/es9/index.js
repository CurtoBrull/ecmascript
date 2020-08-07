// Operador de reposo ...

const obj = {
  name: 'Javier',
  age: 41,
  country: 'ES',
};

// let {name, ...all} = obj;
// console.log(name, all);

let {country, ...all} = obj;
console.log(all);

// Unir elementos de objetos a otro objeto

const obj = {
  name: 'Javier',
  age: 41,
};

const obj2 = {
  ...obj,
  country: 'ES',
};

console.log(obj2);

// Promise.finally Cuando ha terminado ejecutar algo

const helloWorld = () => {
  return new Promise ((resolve, reject) => {
    (true)
    ? setTimeout(() => resolve('Hello World'), 3000)
    : reject(new Error('Test Error'))
  });
};

helloWorld()
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .finally(() => console.log('Finalizado'))

  // regex

  const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
  const match = regexData.exec('2018-04-20');
  const year = match[1]
  const month = match[2]
  const day = match[3]

  console.log(year, month, day);

