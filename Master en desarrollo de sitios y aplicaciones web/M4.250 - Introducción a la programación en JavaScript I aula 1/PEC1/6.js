/*
M4.250 - Introducción a la programación en JavaScript I aula 1
PEC 1
Alumno: Ivan Schartun
*/


// Declaracion de variables principales a ser utilizadas


let a1 = prompt("Ingresar primer digito de ISBN: ");
let a2 = prompt("Ingresar segundo digito de ISBN: ");
let a3 = prompt("Ingresar tercero digito de ISBN: ");
let a4 = prompt("Ingresar cuarto digito de ISBN: ");
let a5 = prompt("Ingresar quito digito de ISBN: ");
let a6 = prompt("Ingresar sexto digito de ISBN: ");
let a7 = prompt("Ingresar septimo digito de ISBN: ");
let a8 = prompt("Ingresar octavo digito de ISBN: ");
let a9 = prompt("Ingresar novedo digito de ISBN: ");
let a10 = prompt("Ingresar decimo digito de ISBN: ");
let a11 = prompt("Ingresar decimo primero digito de ISBN: ");
let a12 = prompt("Ingresar decimo segundo digito de ISBN: ");
let a13 = prompt("Ingresar decimo tercer digito de ISBN: ");

//convierto el valor que inicialmente es texto, a número, para poder realizar operaciones

a1 = parseInt(a1);
a2 = parseInt(a2);;
a3 = parseInt(a3);;
a4 = parseInt(a4);;
a5 = parseInt(a5);;
a6 = parseInt(a6);;
a7 = parseInt(a7);;
a8 = parseInt(a8);;
a9 = parseInt(a9);;
a10 = parseInt(a10);;
a11 = parseInt(a11);;
a12 = parseInt(a12);;
a13 = parseInt(a13);;

// Multiplicamos por 1 las posiciones impares y por 3 las posiciones pares del código, y sumamos

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
