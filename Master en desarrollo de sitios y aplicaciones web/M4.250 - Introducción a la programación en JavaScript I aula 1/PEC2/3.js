/*
M4.250 - Introducción a la programación en JavaScript I aula 1
PEC 2
Alumno: Ivan Schartun
*/



// Declaracion de variables principales a ser utilizadas

let numero = prompt("Introduzca un numero entero positivo: ");
let resultado = 0;
let serieSuma = "";


//Comprobacion que los valores ingresados son numeros entereos positivos, y no sean float (decïmal con "."), ni strings

if ( isNaN(numero) || numero % 1 !== 0 || numero <= 0 ) {
  console.log("Valor insertado no es válido")
} else {

 // Método de calculo
  
  numero = parseInt(numero);
  
  for ( i = 1; i < (numero + 1); i++ ) {
    serieSuma = serieSuma + i + " + " ;
    secuencia = serieSuma.slice(0, -3);  
    resultado += i;
  }
 
 // Método de presentación por consola
  
  console.log(secuencia + " = " + resultado);
}


