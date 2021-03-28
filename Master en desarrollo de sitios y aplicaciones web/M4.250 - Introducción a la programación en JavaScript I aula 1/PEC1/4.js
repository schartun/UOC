/*
M4.250 - Introducción a la programación en JavaScript I aula 1
PEC 1
Alumno: Ivan Schartun
*/


// Declaracion de variables principales a ser utilizadas


let a = prompt("Introducir un numero entero para el valor de A: ");
let b = prompt("Introducir un numero entero para el valor de B: ");
let c = prompt("Introducir un numero entero para el valor de C: ");

// Mostrar por consola los valores ingresados segun el orden a,b,c

console.log("Valores introducidos: " + " a:" + a+ " b:" + b+ " c:" + c);

//Comprobacion que los valores ingresados son numeros entereos, y no sean float, ni strings


if (isNaN(a) || isNaN(b) || isNaN(c) ){
    console.log("Uno o mas de los valores introducidos no es un número valido, cargue el programa para introducir nuevamente");
} else if ((a % 1 !== 0)||(b % 1 !== 0)||(c % 1 !== 0)) {
    console.log("Uno o mas de los valores introducidos es un numero decimal, cargue el programa para introducir nuevamente");
    } else {

        //Valores ingresados no sean String
        a = parseInt(a);
        b = parseInt(b);
        c = parseInt(c);

        //Validacion de condiciones

        if ( a == (b + c) ) {
            console.log("Se cumple que: a=b+c");            
        } else if ( b == (a + c) ) {
            console.log("Se cumple que: b=a+c");
        } else if ( c == (a + b) ) {
            console.log("Se cumple que: c=a+b");
        } else {
            console.log("Los números no cumplen la condición");
        }
    }
    

