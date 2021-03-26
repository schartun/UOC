/*
M4.250 - Introducción a la programación en JavaScript I aula 1
PEC 2
Alumno: Ivan Schartun
*/

// Declaracion de variables principales a ser utilizadas


let numero = prompt("Inserte numero entero real: ");
let resultado = 0;
let serieSuma = "";


// Metodo de calculo 

if ( numero === "" || numero === undefined || isNaN(numero) === true || numero % 1 !== 0 || numero < 0 ) {
  console.log("Valor insertado no es valido")
} else {

  // Cambio de string a numero entero 
  numero = parseInt(numero);
  
  for ( i = 1; i < (numero + 1); i++ ) {
    serieSuma = serieSuma + i + " + " ;
    
    //removemos el ultimo " + " generado
    
    secuencia = serieSuma.slice(0, -3);  
    resultado += i;
  }
  console.log(secuencia + " = " + resultado);
}


