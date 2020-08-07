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
