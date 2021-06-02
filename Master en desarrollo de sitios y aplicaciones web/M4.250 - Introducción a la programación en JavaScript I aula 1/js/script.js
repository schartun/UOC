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