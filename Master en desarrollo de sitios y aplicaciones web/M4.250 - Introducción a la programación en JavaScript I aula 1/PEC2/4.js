/*
M4.250 - Introducción a la programación en JavaScript I aula 1
PEC 2
Alumno: Ivan Schartun
*/

// Declaracion de variables principales a ser utilizadas

let numero = prompt("Inserte numero entero real: ");
let colector = "";

// Metodo de calculo 

console.log("El valor ingresado N = " + numero);

if ( isNaN(numero) || numero % 1 !== 0 || numero <= 1 ) {

  console.log("Valor insertado no es valido por lo que no se puede descomponer, cargue el programa e intente nuevamente");

} else {
      


  numero = parseInt(numero);
  
  for( i = 2 ; i <= numero; i++ ) {
    while( numero % i === 0 ) {
      colector = colector + i + "*";
      numero = numero / i;
      if ( numero === 1 ) {
         colector = colector.slice(0, -1);   //removemos el ultimo " * " generado
        break;
      }
  }
  }
 
  // Método de presentación por consola de resultado
  
  console.log("Sus factores primos son: " + colector);
  
}
