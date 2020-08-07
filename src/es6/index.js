// Valores por defecto
function newFunction(name, age, country) {
  var name = name || 'Javier';
  var age = age || 41;
  var country = country || 'ES'; 
  console.log(name, age, country);
}

// ES6

function newFunction2(name = 'Javier', age = 41, country = 'ES') {
  console.log(name, age, country);
}

newFunction2();
newFunction2('Antonio', 38, 'ES');

// Template Literal

let hello = 'Hello';
let world = 'World'
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

// ES6

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// Multilínea

let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit \n"
+ "otra frase epica despues de barra n";

// ES6

let lorem2 = `otra frase epica que necesitamos
ahora es otra frase épica
`;

console.log(lorem);
console.log(lorem2);

// Desestructuración

let person = {
  'name': 'Javier',
  'age': 41,
  'country': 'ES'
}

console.log(person.name, person.age, person.country);

// ES6

let {name, age, country} = person;
console.log(name, age);

// Spread Operator

let team1 = ['Javier', 'Antonio', 'Izhan'];
let team2 = ['Ana', 'Silvia', 'Sara'];

// unimos con ...nombreVariable

let education = ['David', ...team1, ...team2];

console.log(education);

// Objetos

let name = 'Oscar';
let age = 32;

obj = {name: name, age: age};

// ES6

obj2 = {name, age};

console.log(obj2);

// Arrow funtions. Sintaxis más reducida y .this no vinculable

const names = [
  {name: 'Javier', age: 41},
  {name: 'Loly', age: 47}
]

let listOfNames = names.map(function (item) {
  console.log(item.name);
})
// Arrow function
let listOfNames2 = names.map(item => console.log(item.name))

const listOfNames3 = (name, age, country) => {
  ...
}

const listOfNames4 = name => {
  ...
}

// Arrow function que multiplica un numero por si mismo
const square = num => num * num;

// Promesas (algo va a pasar). Asincronismo

const helloPromise = () => {
  return new Promise ((resolve, reject) => {
    if (false) {
      resolve('Hey!');
    } else {
      reject('Ups!!');
    }
  });
}
helloPromise()
  .then(response => console.log(response))
  .then(() => console.log('hola'))
  .catch(error => console.log(error));

// Clases

class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  sum (valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new calculator();
console.log(calc.sum(2,2));

// Import - Export

import { hello } from './module';

hello();

// Generators

function* helloWorld() {
  if (true) {
    yield 'Hello, ';
  } 
  if (true) {
    yield 'World';
  }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value); // hello
console.log(generatorHello.next().value); // world
console.log(generatorHello.next().value); // undefined
