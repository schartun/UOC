/*
M4.250 - Introducción a la programación en JavaScript I aula 1
PEC 2
Alumno: Ivan Schartun
*/

// Declaracion de variables principales a ser utilizadas


let numero = prompt("Inserte numero entero real: ");
let resultado = 0;
let serieSuma = "";

// Cambio de string a numero entero 

numero = parseInt(numero);


// Metodo de calculo 

for ( i = 1; i < (numero + 1); i++ ) {
  serieSuma = serieSuma + i + " + " ;
  
  //removemos el ultimo " + " generado
  secuencia = serieSuma.slice(0, -3);  
  
  resultado += i;
 
}
console.log(secuencia + " = " + resultado);


