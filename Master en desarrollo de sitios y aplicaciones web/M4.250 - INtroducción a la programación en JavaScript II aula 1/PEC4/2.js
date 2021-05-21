
// M4.250 - Introducción a la programación en JavaScript II aula 1
// PEC 4
// Alumno: Ivan Schartun


//Definición de funciones

// funcion producto

function serieProducto (serie) {
  let result = 1;
  for (let i = 0; i < serie.length; i++) {
    result = result * serie[i];
  }
  return result
}

// funcion para calculo de producto maximo

function maxStringProduct (str) {
  let acum = [];
  for ( let i = 0; i < str.length - 2; i++ ){
    let subStr = str.substring(i, i + 3);
    acum[i] = serieProducto(subStr);
  }
  let maxProduc = Math.max.apply(null, acum);
  console.log(`El mayor producto de las subserie de 3 dígitos de "${str}" es "${maxProduc}" ` );
}


// Proceso de ingreso y validacion de String por usuario

let str = prompt('Ingrese una serie de numeros valida, cargue el programa nuevamente');

( ( str <= 0 ||
   str % 1 !== 0 || 
   str == null ||
   isNaN(str) ) ?
 console.log('No es una serie de numeros') :
 maxStringProduct(str) );
