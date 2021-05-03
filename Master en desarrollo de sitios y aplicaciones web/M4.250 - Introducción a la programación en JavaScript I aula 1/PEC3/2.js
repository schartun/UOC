/*
M4.250 - Introducción a la programación en JavaScript I aula 1
PEC 3
Alumno: Ivan Schartun
*/

// Declaracion de variables principales a ser utilizadas

let fecha = prompt("Introduzca fecha en formato 'DD/MM/AAAA':");


//Convertir el string a fecha para poder modificarlo
let msDate = Date.parse(date);

// Número de milisegundos por día
let msPerDay = 24 * 60 * 60 * 1000; 

// Resta de dias en ms
let msYesterday =  msDate - msPerDay;
console.log(msYesterday);
let yesterday = new Date(msYesterday);
console.log(yesterday.toLocaleDateString());
// Obteber el dia
// Obteber el mes
// Obteber el año 
let año  = yesterday.getFullYear();
console.log(año);



//Otra solucion mas robusta



let string = '1/2/2019';
let info = "";
let c = 0;
let j = 0;
let array = [];

for (i = 0; i <= string.length; i++ ) {
  if ( string[i] === '/' || string[i] === '-' ) {
    info = string.slice(c, i);
    array[j] = info;
    c = c + (info.length + 1);
    j++
  } 
  info = string.slice(c, i);
  array[j] = info
}

let DD = array[0];
let MM = array[1] -1;
let YYYY = array[2];

let fecha = new Date(YYYY, MM, DD);
let msPerDay = 24 * 60 * 60 * 1000;  // Número de milisegundos por día
msYesterday =  fecha - msPerDay;
yesterday = new Date(msYesterday);
console.log(yesterday.toLocaleDateString());


//tercera solucion pero esta es la que usare


let date = prompt("Introduzca fecha en formato 'DD/MM/AAAA':");

//Comprobar que siga el formato correcto el string

if (date.includes('/') === true && date.slice(0,3).includes('/')) {

  //convert string to date
  
  var dattmp = date.split('/').reverse().join('/');
  var nwdate =  new Date(dattmp);

  
  // Número de milisegundos por día
  let msPerDay = 24 * 60 * 60 * 1000; 

  // Resta de dias en ms
  let msYesterday =  nwdate - msPerDay;

  let yesterday = new Date(msYesterday);

  console.log("El dia de ayer fue: " + yesterday.toLocaleDateString(('en-GB')));  
} else {
  console.log("Formato de fecha no valida, cargue nuevamente el programa e intenete con formato correcto");
}
  

