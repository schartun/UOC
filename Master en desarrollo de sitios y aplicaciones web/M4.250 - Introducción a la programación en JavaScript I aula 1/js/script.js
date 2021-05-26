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

