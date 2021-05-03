

// Declaracion de variables principales a ser utilizadas

const dniRaw = parseInt(prompt("Ingrese numero de DNI"));

let dniTable = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];

// Metodo de verificacion de dniRaw valido

if ( isNaN(dniRaw) || dniRaw < 1 ) {
  console.log("Valor ingresado no Valido");
} else {

 // Metodo de calculo de letra segun DNI

let dniDivision = dniRaw%23;
let letter = dniTable[dniDivision].toString();

 // Metodo de presentación por consola de resultado

console.log("Su DNI con asignación de letra es: " + dniRaw.toString().concat("-",letter));

}