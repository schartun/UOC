/*
M4.250 - Introducción a la programación en JavaScript I aula 1
PEC 2
Alumno: Ivan Schartun
*/


// Declaracion de variables principales a ser utilizadas

let numero = prompt("Inserte numero entero: ");
let cadena = 0;
let secuencia;

  // Metodo de calculo de cada numero de la serie 

if ( numero === "" || numero === undefined || isNaN(numero) === true || numero % 1 !== 0 || numero < 0 ) {
  console.log("Valor insertado no es valido")
} else {
  
  numero = parseInt(numero);

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
  
}





