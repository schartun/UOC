/*
M4.250 - Introducción a la programación en JavaScript I aula 1
PEC 3
Alumno: Ivan Schartun
*/

// Declaracion de variable principal a ser utilizada

const date = prompt("Introduzca fecha en formato 'DD/MM/AAAA':");

// Comprobar que siga el formato correcto de string DD/MM/AAAA

if (
  ( date !== null ) &&
  (date.includes('/')) &&
  (isNaN( date.slice(0,2)) === false) &&
  (isNaN( date.slice(3,5)) === false) &&
  (isNaN(date.slice(6,10)) === false) &&
  ( date.length === 10 )
  ) {

// Metodo de calculo
  
  let dattmp = date.split('/').reverse().join('/');
  let nwdate =  new Date(dattmp);
  
  let msPerDay = 24 * 60 * 60 * 1000;    // Número de milisegundos por día
  let msYesterday =  nwdate - msPerDay;
  let yesterday = new Date(msYesterday);
  
// Impresion por consola de fecha actual

  console.log("El día de ayer fue: " + yesterday.toLocaleDateString(('en-GB')));  
} else {
  console.log("Formato de fecha no valida, cargue nuevamente el programa e intente con formato correcto");
}
  