/*
M4.250 - Introducción a la programación en JavaScript I aula 1
PEC 3
Alumno: Ivan Schartun
*/

//Definición de variable

let array = [];
let reverse = [];
let size = parseInt(prompt("Indique la cantidad de valores que tendrá el arreglo (número entero positivo): "));

//Método de calculo

if ( size <= 0 || isNaN(size)) {
  console.log("El valor del tamaño del arreglo debe ser mayor a 0, cargue nuevamente el programa para volver a intentar");
} else {
  for (var i = 0; i < size; i++) {
    array[i] = prompt("Inserte el valor para la posición #" + (i+1) + " del arreglo: ");
  }
  for ( let j = 0; j < array.length; j++) {
    reverse[j] = array[ (array.length - 1) - j];
  }
  
//Método de presentación por consola del resultado
  console.log(`El arreglo ingresado es [${array}]`);
  console.log(`El reverso del arreglo es [${reverse}]`);
}

// Existe un método que puede facilitar el cálculo de una manera muchas más sencilla .reverse() el cual se aplica directamente al array devolviendo el mismo invertido
  
  
