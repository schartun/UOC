/*
M4.250 - Introducción a la programación en JavaScript I aula 1
PEC 2
Alumno: Ivan Schartun
*/

// Declaracion de variables principales a ser utilizadas

let numero = prompt ("Inserte numero entero: ");
let cadena = 0;
let secuencia;

// Cambio de string a numero entero 

numero = parseInt(numero);


// Metodo de calculo de cada numero de la serie 

while ( numero !== 1 ) {
    if ( numero % 2 == 0) {
    numero = numero / 2;
  } else if ( numero % 2 !== 0 ) {
    numero = ( numero * 3 ) + 1; 
  }
  // Creamos una contenedor donde se adicione cada resultado generador
  cadena = cadena + numero + ",";
  // Se remueve la ultima coma incluidad en la cadena final
  secuencia = cadena.slice(0, -1);
}
console.log(secuencia);




