/*
M4.250 - Introducción a la programación en JavaScript I aula 1
PEC 3
Alumno: Ivan Schartun
*/

// Declaración de variables principales a ser utilizadas


const dniRaw = parseInt(prompt("Ingrese número de DNI"));

let dniTable = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];

// Método de calculo
//Nota: No se establece una regla para la longitud del número de DNI ingresado, ya que se desconoce si hay un límite máximo

if ( isNaN(dniRaw) || dniRaw < 1 ) {
  console.log("Valor ingresado no válido");
} else {



let dniDivision = dniRaw%23;
let letter = dniTable[dniDivision].toString();

 // Método de presentación por consola de resultado

console.log("Su DNI con asignación de letra es: " + dniRaw.toString().concat("-",letter));

}


