// 1- Dado el siguiente array ["Pera", "Naranja", "Fresa", "Banana", "Mango", "Manzana"] ordenar alfabéticamente todos los elementos.

const array = ["Pera", "Naranja", "Fresa", "Banana", "Mango", "Manzana"];

let arrayOrdered = array.sort();

console.log(arrayOrdered);


// // 2- Dado el siguiente array ["pera", "Naranja", "fresa", "Banana", "Mango", "manzana"] ordenar alfabéticamente todos los elementos.

var array = ["pera", "Naranja", "fresa", "Banana", "Mango", "manzana"];


function compare(a, b) {
  if ( a.toLowerCase() > b.toLowerCase() ) {
    return 1;
  }
  if ( a.toLowerCase() < b.toLowerCase() ) {
    return -1;
  }
  return 0;
};

let orderedArray = array.sort(compare);

console.log(orderedArray);


// 3- Dado el siguiente array [5,515,1,61,111,616,51,4,36,8,11] ordenar los valores de menor a mayor.

const array = [5,515,1,61,111,616,51,4,36,8,11];

console.log(array.sort(function( a, b){ return a - b }));

// 4- Dado el siguiente array [5,515,1,61,111,616,51,4,36,8,11] ordenar los valores de mayor a menor.

const array = [5,515,1,61,111,616,51,4,36,8,11];

console.log(array2.sort(function( a, b){ return b - a }));


// 5- Dado el siguiente array ["Luis", "Carmen", "Sergio", "Andrés", "Tomás"] eliminar el elemento "Sergio".

const array = ["Luis", "Carmen", "Sergio", "Andrés", "Tomás"];

for( var i = 0; i < array.length; i++){ 
  if ( array[i] === "Sergio") { 
    
            array.splice(i, 1); 
        }
    
    }
console.log(array);

// 6- Dado el siguiente array [5, 8, 9, 1, 2, 4] eliminar el elemento que se encuentra en la posición 2 (será el valor 9) pero solo usando su posición y no el valor del elemento.

const array = [5, 8, 9, 1, 2, 4];

array.splice(2, 1);

console.log(array);

// 7- Crear un código que busque el elemento mayor del siguiente array [1, 38, 7, 51, 18, 54, 6, 32].

const array = [1, 38, 7, 51, 18, 54, 6, 32];

let biggest = Math.max.apply(Math, array);

console.log(biggest);

// 8- Crear un código que genere un array a partir de los datos que inserta el usuario por teclado. Todos los elementos que el usuario inserte se añadirán al array hasta que escriba "STOP". Después se presentará el tamaño del array y todos sus elementos.

let value = '';
let i = 0;
let array = [];
let arrayNotStop = [];

do {
  value = prompt('Ingrese un valor para el arreglo');
  array[i] = value;
  i++
} while( value !== 'STOP');

array.pop();

console.log(`El tamano del arreglo es ${array.length}, y los valores son [${array}]`);


// 9- Convertir el siguiente String en un Array y a continuación eliminar todos los "." que se encuentren: "Hoy. es. martes."

const string1 = 'Hoy. es. martes.';

let string2 = string1.replaceAll(" ", "");

let array3 = string2.split('');

for( var i = 0; i < array3.length; i++){ 
    
        if ( array3[i] === '.' ) { 
    
            array3.splice(i, 1); 
        }
    
    }

console.log(array3);
