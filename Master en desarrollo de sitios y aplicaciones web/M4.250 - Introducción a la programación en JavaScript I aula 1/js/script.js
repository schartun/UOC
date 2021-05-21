//////////////////////////////////////////////////////////////////////////////////////////////////////////
// 1- Crear un código que devuelva un carácter de un string a partir de su posición (índice en el String).
/////////////////////////////////////////////////////////////////////////////////////////////////////////
// - Repuesta:

// Definir variables

const sentence = prompt("Insertar una palabra");
const index = parseInt(prompt("Insertar # de posición"));

// Procedimiento
if ( index >= sentence.length || index < 0 )  {
  console.log('La posición esta fuera del rango de longitud de la frase')
}

// Método de presentación por consola

console.log(`El carácter que se encuentra en la posición ${index} es ${sentence.charAt(index)}`);

////////////////////////////////////////////////////////////////////////////////////////////////////////
// 2- Crear un código que concatene dos Strings
////////////////////////////////////////////////////////////////////////////////////////////////////////
// - Repuesta:

// Definir variables

const str1 = prompt('Ingrese primera palabra, o frase');
const str2 = prompt('Ingrese segunda palabra, o frase');

// Método de presentación por consola

console.log(`La nueva frase es : ${str1.concat(' ', str2)}`);

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// 3- Dado un Array que contenga todo letras, que cree un String con el mismo orden que el array
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// - Repuesta:

// Definir variables

const array = [ 'a', 'b', 'c', 'd'];
let list = '';

// Procedimiento

list = array.join(',');

// Método de presentación por consola

console.log(`La nueva lista generada del arreglo es --> ${list} <--`);

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// 4- Crear un código que devuelva si un String termina con un String dado.
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// - Repuesta:

// Definir variables


const stringValidate = prompt('Ingrese "string" a validar');
const stringLook = prompt('Ingrese "string" a buscar');

// Procedimiento

console.log(`La cadena de caracteres "${stringLook}" "${((stringValidate.endsWith(stringLook)) ? "Si" : "No")}" esta presente al final de "${stringValidate}"`);


//////////////////////////////////////////////////////////////////////////////////////////////////////////
// 5- Crear una función que compare dos Strings y nos diga si son iguales.
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// - Repuesta:

// Definir variables

const stringA = prompt('Inserte la "string A", tomar en cuaenta case sensitive');
const stringB = prompt('Inserte la "string B", tomar en cuaenta case sensitive');

// Procedimiento

let result = (stringA.localeCompare(stringB) === 0 ? "Si" : "No");

// Presentación de resultados por consola
console.log(`La dos cadenas de caracteres "${result}" son iguales`);

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// 6- Transformar un String en un Array en el que cada posición contenga cada una de las letras del String y después volver a construir un Array con el contenido del String pero en orden inverso.
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// - Repuesta:

// Definir variables

const str = "JavaScript";

// Procedimiento

const chars = str.split('');
const revr = chars.reverse()

// Presentación de resultados por consola

console.log(revr);

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// 7- Imprimir por pantalla la fecha actual
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// - Repuesta:

// Definir variables

const today = new Date();

// Presentación de resultados por consola

console.log(today.toLocaleDateString(('en-GB')));

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// 8- Crear una fecha con los siguientes datos: 20 de mayo de 2018
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// - Repuesta:

// Definir variables

var date = new Date(2018,04,20);

// Presentación de resultados por consola

console.log(date.toLocaleDateString(('en-GB')));

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// 9- Crear un código que imprima el número de milisegundos trascurridos desde el 1 de enero de 1970 a las 0
//0.00.00 hasta el momento donde se ejecute tu código.
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// - Repuesta:

// Definir variables

const today = new Date();

// Procedimiento

const miliseg = today.getTime();

// Presentación de resultados por consola

console.log(miliseg);

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// 10- Dado un numero introducido por el usuario, comprobar si es o no es un número entero.
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// - Repuesta:

// Definir variables

const number = prompt('Ingrese un numero');

// Procedimiento

(isNaN(number) ?
 console.log('El valor ingresado no es un número') :
 ( number % 1 == 0 ?
  console.log('El número es entero') :
  console.log('El numero no es entero')));


//O usando un método del objeto Number//


// Definir variables
const number = parseFloat(prompt('Ingrese un numero'));

// Procedimiento
const result = Number.isInteger(number);

// Presentación de resultados por consola
console.log(result);
