/*
M4.250 - Introducción a la programación en JavaScript I aula 1
PEC 1
Alumno: Ivan Schartun
*/


// Declaracion de variables principales a ser utilizadas

let dia = prompt("ingresar dia en un rango de 1 - 31");
let mes = prompt("ingresar mes en un rango de 1 - 12");

// Mostrar por consola los valores ingresados segun el orden dia, mes

console.log("Dia: " + dia + " Mes: " + mes )

//Comprobacion que los valores ingresados sean sean numeros entre un rango dia 1-31, mes 1-12
// isNaN nos permite verificar si es un numero
// %1 nos permite verificar si es un entero
// las expresiones >, < nos permiten restringir el rango

if (isNaN(dia) || isNaN(mes)){
    console.log("Uno o ambos de los valores introducidos no son números validos, cargue el programa para introducir nuevamente");
} else if ((dia % 1 !== 0)||(mes % 1 !== 0)) {
    console.log("Uno o ambos de los valores introducidos es un numero decimal, cargue el programa para introducir nuevamente");
    } else if ( (dia <= 0) || (dia > 31) || (mes <= 0 ) || (mes > 12) ) {
    console.log("El  rango de dia debe ser entre 1 - 31,  y el de mes entre 1- 12, verifique y cargue nuevamente");
} else {

    //Valores ingresados no deden ser String

    dia = parseInt(dia);
    mes = parseInt(mes);

    //Validacion de condiciones segun mes, y dia

    switch  (mes) {
        
        case 1:
            console.log("Enero y Invierno");
            break;
        case 2:
            console.log("Febrero e Invierno");
            break;
        case 3:
            if (dia >= 1 && dia <= 20) {
                console.log("Marzo e Invierno");
            } else if ( dia >= 21 && dia <= 31) {
                console.log("Marzo y Primavera");
            }
            break;
        case 4:
            console.log("Abril y Primavera");
            break;
        case 5:
            console.log("Mayo y Primavera");
            break;
        case 6:
            if (dia >= 1 && dia <= 20){
                console.log("Junio y Primavera"); 
            } else if (dia >= 21 && dia <= 30) {
                console.log("Junio y Verano");
            }
            break;
        case 7:
            console.log("Julio y Verano");
            break;
        case 8:
            console.log("Agosto y Verano");
            break;
        case 9:
            if (dia >= 1 && dia <= 22) {
                console.log("Septiembre y Verano");
            } else if (dia >= 23 && dia <= 30) {
                console.log("Septiembre y Otoño");
            }
            break;
        case 10:
            console.log("Octubre y Otoño");
            break;
        case 11:
            console.log("Noviembre y Otoño");
            break;
        case 12:
            if (dia >= 1 && dia <= 20) {
                console.log("Diciembre y Otoño");
            } else if (dia >= 21 && dia <= 31) {
                console.log("Diciembre e Invierno")
            }
            break;
    }

}