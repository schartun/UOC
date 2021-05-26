// 1- Crear un array que contenga las siguientes cadenas: "luna", "ganimedes", "europa", "calixto", "io", una vez creado se deberá imprimir por pantalla cada uno de los valores primero sin utilizar y después utilizando un bucle.

// definición de arreglo
const moons = ['luna', 'ganimedes', 'europa', 'calixto', 'io'];

//impresión simple
console.log(moons[0]);
console.log(moons[1]);
console.log(moons[2]);
console.log(moons[3]);
console.log(moons[4]);

//impresión con loop
for ( let i = 0; i < moons.length; i++) {
  console.log(moons[i]);
}


// 2- Crear un array que contenga los siguientes dígitos: 20, 5, 9, 63, 28, 27 y una vez creado obtener la longitud del array y mostrarla por pantalla.

const data = [20, 5, 9, 63, 28, 27];

console.log(data.length);

// 3- Dado el array = [1,2,3,4,5,6], desarrollar un script que realice lo siguiente:

// - Iterar por todos los elementos dentro de un array utilizando while y mostrarlos en pantalla.

const array = [1,2,3,4,5,6];
let i = 0;
while (  i < array.length ) {
  console.log(array[i]);
  i++
}

// - Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en pantalla.

const array = [1,2,3,4,5,6];
for ( let i = 0; i < array.length; i++ ) {
  console.log(array[i]);
}


// - Generar una copia de un array pero con todos los elementos incrementado en 1.

const array = [1,2,3,4,5,6];
let arrayCopy = []
for ( let i = 0; i < array.length; i++ ) {
  arrayCopy[i] =array[i] + 1;
}
console.log(arrayCopy);


// - Calcular la media de los valores del array original

const array = [1,2,3,4,5,6];
let sum = 0;
for ( let i = 0; i < array.length; i++ ) {
  sum = sum + array[i];
}
console.log(sum/array.length);

// El ejercicio se debe completar sin modificar el array original


// 4- Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "negro", "gris"]
// determinar si un color introducido por el usuario a través de un prompt();
// se encuentra dentro del array o no.

const array = ["azul", "amarillo", "rojo", "verde", "negro", "gris"];
let color = prompt('Ingrese un color');

let answer =  array.includes(color.toLowerCase ());

(answer ? console.log('Si inluye el color') : console.log('No inluye el color') );