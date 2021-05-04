/*
M4.250 - Introducción a la programación en JavaScript I aula 1
PEC 2
Alumno: Ivan Schartun
*/


// Declaracion de variables principales a ser utilizadas

let numero = prompt("Inserte numero entero positivo: ");
let cadena = 0;
let secuencia;
let nStop;

//Presentación por consola de valor introducido

console.log("El valor introducido es: " + numero);

//Comprobacion que los valores ingresados son numeros entereos positivos, y no sean float (decïmal con "."), ni strings

if ( isNaN(numero) || numero % 1 !== 0 || numero <= 0 ) {
  console.log("Valor insertado no es valido, cargue el programa para intentar nuevamente")
} else {
 
 // Metodo de calculo de cada numero de la serie 
  
  numero = parseInt(numero);
  
  while ( nStop !== 1 ) {
      if ( numero % 2 == 0) {
      numero = numero / 2;
      nStop = numero;  
    } else if ( numero % 2 !== 0 ) {
      numero = ( numero * 3 ) + 1; 
    }
    
    cadena = cadena + numero + ",";
    secuencia = cadena.slice(0, -1);
  }
 
  //Método de presentación de serie por consola

  console.log("La secuencia calculada es: "+ secuencia);
 }
  
