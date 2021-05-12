/*
M4.250 - Introducción a la programación en JavaScript I aula 1
PEC 2
Alumno: Ivan Schartun
*/

// Declaracion de variables principales a ser utilizadas

let base = prompt("Introduzca un número entero positivo para la base: ");
let exponente = prompt("Introduzca un número entero  positivo para el exponente: ");
let resultado = 1;
let serieExponente = "";


//Comprobacion que los valores ingresados son numeros entereos positivos, y no sean float (decïmal con "."), ni strings

if ( base <= 0 || exponente <= 0 || isNaN(base) || isNaN(exponente) || base % 1 !== 0 || exponente % 1 !== 0  ) 
{

  console.log("Uno o ambos de los valores introducidos no son números válidos, cargue el programa para introducir nuevamente")

} else {

 // Método de calculo
  
 base = parseInt(base);
 exponente = parseInt(exponente);
    
 for ( i = exponente; i > 0; i-- ){
   serieExponente = serieExponente +  base + "*";
   secuencia = serieExponente.slice(0, -1); 
   resultado *= base;
  }
 
 // Método de presentación por consola
  
  console.log("Base:" + base + " Exponente:" + exponente + " , Resultado:" + secuencia + "=" + resultado);
}
