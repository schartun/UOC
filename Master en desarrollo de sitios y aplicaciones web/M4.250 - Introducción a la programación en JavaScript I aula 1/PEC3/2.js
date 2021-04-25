// Escribid una función en JavaScript que devuelva la fecha anterior a una fecha pasada como parámetro en formato de texto 'DD/MM/AAAA', donde DD es el día, MM el mes y AAAA el año.

// Ejemplo: si la entrada es '01/01/2019', la salida debe ser '31/12/2018'.

// let fecha = prompt("Introduzca fecha en formato 'DD/MM/AAAA':");

let date = '01/01/2019';

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
