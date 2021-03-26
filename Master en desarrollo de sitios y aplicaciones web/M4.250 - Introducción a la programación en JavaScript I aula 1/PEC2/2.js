/*
M4.250 - Introducción a la programación en JavaScript I aula 1
PEC 2
Alumno: Ivan Schartun
*/

// Declaracion de variables principales a ser utilizadas

let base = prompt("Introduzca un numero entero para la base: ");
let exponente = prompt("Introduzca un numero entero para el exponente: ");
let resultado = 1;



// Metodo de calculo 

if ( base <= 0 || exponente <= 0 || base === "" || exponente === "" || base === undefined || exponente === undefined || isNaN(base) === true || isNaN(exponente) === true || base % 1 !== 0 || exponente % 1 !== 0  ) {

  console.log("Valor insertado no valido")

} else {

  // Cambio de string a numero entero 
  base = parseInt(base);
  exponente = parseInt(exponente);
    
  while ( exponente > 0) {
    resultado *= base;
    exponente -=1;
  }
  console.log(resultado);

  }