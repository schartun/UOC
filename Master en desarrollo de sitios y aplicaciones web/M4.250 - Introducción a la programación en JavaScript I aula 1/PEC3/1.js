/*
M4.250 - Introducción a la programación en JavaScript I aula 1
PEC 3
Alumno: Ivan Schartun
*/


// Declaracion de funcion 

function todayIs() {
  
    // Declaracion de variables principales a ser utilizadas y asignacion de metodos del objeto Date
    
    const today = new Date();
    let yearMonth = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    let currentMonth;
    let year = today.getFullYear();     
    let month = today.getMonth();         
    let date = today.getDate(); 
    
    // Metodo de conversion de getMonth
    
    currentMonth = yearMonth[month];
    
    
    // Impresion por consola de fecha actual
    console.log(date + " de " + currentMonth + " de " +  year);
  
  }
  
  // LLamada de funcion
  
  todayIs();
  
  
  