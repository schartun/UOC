/*
M4.250 - Introducción a la programación en JavaScript I aula 1
PEC 3
Alumno: Ivan Schartun
*/


// Declaracion de funcion 

function todayIs() {
  
    // Declaracion de variables principales a ser utilizadas y asignacion de metodos del objeto Date
    
    const today = new Date();
    let currentMonth;
    let year = today.getFullYear();     
    let month = today.getMonth();         
    let date = today.getDate(); 
    
    // Metodo de conversion de getMonth
    
    switch(month) {
    case 0:
      currentMonth = "enero";
      break;
    case 1:
      currentMonth = "febrero";
      break;
    case 2:
      currentMonth = "marzo";
      break;
    case 3:
      currentMonth = "abril";
      break;
    case 4:
      currentMonth = "mayo";
      break;
    case 5:
      currentMonth = "junio";
      break;
    case 6:
      currentMonth = "julio";
      break;
    case 7:
      currentMonth = "agosto";
      break;
    case 8:
      currentMonth = "septiembre";
      break;
    case 9:
      currentMonth = "octubre";
      break;
     case 10:
      currentMonth = "noviembre";
      break;
     case 11:
      currentMonth = "diciembre";
      break;
    }
    
    // Impresion por consola
    console.log(date + " de " + currentMonth + " de " +  year);
  
  }
  
  // LLamada de funcion
  
  todayIs();
  
  