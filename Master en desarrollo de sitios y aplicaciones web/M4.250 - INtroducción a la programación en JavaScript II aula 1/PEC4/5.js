
// M4.250 - Introducción a la programación en JavaScript II aula 1
// PEC 4
// Alumno: Ivan Schartun

// Función para calculo del término enésimo de una serie de Fibonacci.


function nthFibonacci(n) {
  
    // Definición de variables
    let a = 0;
    let b = 1
    let c;
    let acum = "";
    
    // Método de cálculo
    for (let i = 0; i <= n; i++) {
      acum = a;
      c = a + b;
      a = b;
      b = c;
    }
    return acum;
  }


// Función para calculo de factorial de Fibonacci.
  
function factorialFibonacci(n) {

    // Definición de variables
    let prod = 1;
    let serie = ""; 

    // Método de cálculo
    if ( n <= 1 ) {
      return `El factorial de Fibonacci para n=${n} es ${nthFibonacci(n)}`;
    } else {
      for (let i = 1; i <= n; i++) {
        
        serie = serie + nthFibonacci(i);
        prod = prod * nthFibonacci(i);
        
        if (i < n) {
          serie = serie + "*";
        }
      }
      return `El factorial de Fibonacci para n=${n} es ${serie}=${prod}`;
    }
  }
  

  // Procedimiento de para mostrar por consola los 15 primeros factoriales de Fibonacci.

for (let i = 0; i <= 15; i++) {
    console.log(factorialFibonacci(i));
  } 
  
  