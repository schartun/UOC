
// M4.250 - Introducción a la programación en JavaScript II aula 1
// PEC 4
// Alumno: Ivan Schartun

// Función cálculo de Pitágoras

function pitagoras ( a, b, c) {
    if ( a < b && b < c) {
      if ( a * a + b * b === c * c){
        return true;
      } else {
        return false;
      }
    }
  }
  
  // Definición variables
  
  let a, b, c;
  
  // Procedimiento de calculo
  
  for ( a = 0; a <= 1000; a++) {
    for ( b = a + 1; b <= 1000; b++) {
      c = 1000 - a - b;
      if (pitagoras( a, b, c )) {
      console.log(`Los valores son a = ${a}, b = ${b}, c = ${c}`);
    }
  }
  }
  