// Crear un código que devuelva un array con los valores invertidos. Por ejemplo:
// - Dado el array [1,2,3,4,5] devolverá [5,4,3,2,1]
// - Dado [5,11,4,21,3] devolverá [3,21,4,11,5]


//Definición de variable

let array = [];
let reverse = [];
let size = parseInt(prompt("Indique el tamano del arreglo (numero entero positivo): "));

//Creación del arreglo a modificar

for (var i = 0; i < size; i++) {
  array[i] = parseInt(prompt("Inserte el valor para la posición #" + (i+1) + " del arreglo: "));
}

console.log("El arreglo a modificar sera es", array);

//Procedimiento para calculo de reverso

for ( let j = 0; j < array.length; j++) {
  reverse[j] = array[ (array.length - 1) - j];
}
console.log("El reverso del arreglo es", reverse);


// Existe un metodo que puede facilitar el calculo de una manera muchas mas sencilla .reverse() el cual se aplica directamente al array devolviendo el mismo invertido
