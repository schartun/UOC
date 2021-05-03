/*
M4.250 - Introducción a la programación en JavaScript I aula 1
PEC 3
Alumno: Ivan Schartun
*/


// Declaracion de variables principales a ser utilizadas
    
const today = new Date();

let yearMonth = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

let currentMonth;
let year;
let month;
let date;

// Metodo de extración de informacion de fecha dada

year = today.getFullYear();     
month = today.getMonth();         
date = today.getDate(); 
    
// Metodo de conversion de getMonth
    
currentMonth = yearMonth[month];
    
    
// Impresion por consola de fecha actual

console.log(date + " de " + currentMonth + " de " +  year);
  

  
  
  
  