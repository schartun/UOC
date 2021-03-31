/*
M4.250 - Introducción a la programación en JavaScript I aula 1
PEC 2
Alumno: Ivan Schartun
*/

// Declaracion de variables principales a ser utilizadas

let resultado = 0;
let presentacion = "";

// Metodo de calculo 

for ( i = 1; i < 11; i++) {
  console.log("Table del " + i + " a continuación:");
  for ( j = 1; j < 11; j++) {
    resultado = i * j;
    presentacion = i + "x" + j + "=" + resultado;
    console.log(presentacion);
  }
}
