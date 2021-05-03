/*
M4.250 - Introducción a la programación en JavaScript I aula 1
PEC 3
Alumno: Ivan Schartun
*/



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
