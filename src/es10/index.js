// Flat
let array = [1,2,3, [1,2,3, [1,2,3]]];

// Solo 1 nivel de flat =
console.log(array.flat());
// Flat con 2 niveles... etc.
console.log(array.flat(2));

// Flat map
let array = [1,2,3,4,5];
// El value X lo multiplicamos por 2:
console.log(array.flatMap(value => [value, value * 2]));

// Eliminar espacios en blanco de strings con trim
// trimStart
let hello ='           hello world';
console.log(hello);
console.log(hello.trimStart());

// trimEnd
let hello = 'hello world       ';
console.log(hello);
console.log(hello.trimEnd());

// Pasar de forma opcional el valor de catch

try {
  
} catch { // ya no hace falta (error) despues de catch
  error
}

// From entries transformar clave-valor en objeto

let entries = [["name", "Javier"], ["age", 41]];
console.log(Object.fromEntries(entries));

// Acceder a la descripcion de un Objeto tipo simbolo

let mySimbl = 'My Symbol';
let symbol = Symbol(mySimbl);
console.log(symbol.description);