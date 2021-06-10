// 1- Crear un código que realice una copia del siguiente array sin utilizar los métodos de los arrays y a continuación eliminar el elemento "Pedro" del array copia y comprobar que el array original no se ha modificado:

// declaración de arreglos
let valores = [11, "Pedro", false, 8, "Roberto", "Luisa", 5];
let valoresCopy = [];

// metodo para generar copia de arreglo
for ( let i = 0 ; i < valores.length; i++) {
  valoresCopy[i] = valores [i];
}

// metodo para remover valor de la copia
valoresCopy.splice(1, 1);


// metodo de comprobación diferencia de arreglos
console.log(valoresCopy);
console.log(valores);



// 2- Crear un código que, dado un array, divida cada uno de los elementos entre 2, e inserte en un nuevo array el resultado de la división (decimal en caso de que sea).
// Por ejemplo: [2, 3, 4] => [1, 1.5, 2]

// declaración de arreglos
let array = [2, 3, 4];
let newArray = [];

// metodo para generar nuevo arreglo
for ( let i = 0 ; i < array.length; i++) {
  newArray[i] = (array [i]) / 2;
}

// metodo presentación por consola
console.log(newArray);

// 3- Crear una código que, dado un array, devuelva el valor del último elemento de un array sin eliminar ese elemento del array.
// let numeos = [11, 3, 1, 8, 5]; //devolverá el 5

let numeros = [11, 3, 1, 8, 5]
console.log(numeros[numeros.length - 1])

// 4- Crear un código que dado un array y una posición, devuelva el array "cortado" desde la posición 0 hasta la recibida.
// Si recibe un 0 devolverá un array con un solo valor, el primero.

let position = 2;
let array = [11, 3, 1, 8, 5];

console.log(array.slice(0,position + 1 )); //incluye el valor de la ultima posición, si no remover +1