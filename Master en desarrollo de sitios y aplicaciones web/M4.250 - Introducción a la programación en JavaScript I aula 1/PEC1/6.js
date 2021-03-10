/*
M4.250 - Introducción a la programación en JavaScript I aula 1
PEC 1
Alumno: Ivan Schartun
*/


// Declaracion de variables principales a ser utilizadas

let isbn = prompt("Introduce el ISBN de 13 cifras");


//convierto el valor que inicialmente es texto, a número, para poder realizar operaciones

let a1 = parseInt(isbn[0]);
let a2 = parseInt(isbn[1]);;
let a3 = parseInt(isbn[2]);;
let a4 = parseInt(isbn[3]);;
let a5 = parseInt(isbn[4]);;
let a6 = parseInt(isbn[5]);;
let a7 = parseInt(isbn[6]);;
let a8 = parseInt(isbn[7]);;
let a9 = parseInt(isbn[8]);;
let a10 = parseInt(isbn[9]);;
let a11 = parseInt(isbn[10]);;
let a12 = parseInt(isbn[11]);;
let a13 = parseInt(isbn[12]);;

// Multiplicamos por 1 las posiciones impares y por 3 las posiciones pares del código segun regla de claculo, y sumamos

let suma12digitos = ( (a1 + a3 + a5 + a7 + a9 + a11) * 1 ) + ( (a2 + a4 + a6 + a8 + a10 + a12) * 3 );

// Sumamos el resultado de los 12 primeros digitos con el digito numero 13

let sumaTotal = suma12digitos + a13;


// Comprobamos si es divisible el resultado por 10, usando el operador %

try {
    if (sumaTotal % 10 !== 0) {
        throw " INCORRECTO";        // No divisible error
    } else {
        console.log("CORRECTO");    // Divisible correcto
    }
} catch (e) {
    console.error(e);               // Mostrar error 

}
