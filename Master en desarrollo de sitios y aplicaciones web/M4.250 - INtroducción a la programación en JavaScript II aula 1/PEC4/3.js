
// M4.250 - Introducción a la programación en JavaScript II aula 1
// PEC 4
// Alumno: Ivan Schartun



// Definicion de funciones 

// funcion factorial

function factorial (number) {
    let result = 1;
    for (let i = 1 ; i <= number; i++) {
      result = result * i;
    }
    return result
  }
  
  // funcion calculo de numero de Brown
  
  function brown (m, n) {
    if ( (factorial(n) + 1 ) === ( m * m ) ) {
      console.log(`${n} y ${m} son numeros de Brown `)
    } else {
          console.log(`${n} y ${m} no son numeros de Brown `)
    }
  }
  
  // Definicion de método entrada variables 
  
  let m = prompt('Ingrese un numero M natural (1<=m<=100,)');
  let n = prompt('Ingrese un numero N natural (1<=n<=100,)');
  
  // Proceso de verificación de numeros ingresados, y calculo. 
  
  if ( (m >= 1 && m <= 100) && (n >= 1 && n <= 100)  ) {
    brown (m, n);
  } else {
    console.log('Los valores ingresados no cumplen con la condicion')
  }
  
  