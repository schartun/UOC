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



/* Esto se tabla segun lo insertado

// Declaracion de variables principales a ser utilizadas

let tabla = prompt("Inserte numero de la tabla: ");
let resultado = 0;
let presentacion = "";

// Metodo de calculo 

if ( tabla === "" || tabla === undefined || isNaN(tabla) === true || tabla % 1 !== 0 || tabla <= 1 ) {

  console.log("Valor insertado no es valido");

} else {

  console.log("Tabla del " + tabla + " a continuación:");
  for ( j = 1; j < 11; j++) {
    resultado = tabla * j;
    presentacion = tabla + "x" + j + "=" + resultado;
    console.log(presentacion);
  }

}
*/