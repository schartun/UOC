/*
M4.250 - Introducción a la programación en JavaScript I aula 1
PEC 1
Alumno: Ivan Schartun
*/


// Declaracion de variables principales a ser utilizadas

let sueldo = prompt("Introducir sueldo: ");
let retencion = 0.2;
let cobro;

// Comprobamos que el valor de sueldo sea un numero, he inclusive que se haya usado "." como decimal


if ( (isNaN(sueldo)) || (sueldo < 0) ){
    console.log("El valor de sueldo no valido, por favor cargue el programa para introducir nuevamente");
} else {

    // Formula que calcula el sueldo que recibira el empleado
    cobro = sueldo - ( sueldo * retencion);

    // Mensaje que recibira el empleado por consola del navegador
    console.log("El sueldo a combrar es: " + cobro);  
    
}





