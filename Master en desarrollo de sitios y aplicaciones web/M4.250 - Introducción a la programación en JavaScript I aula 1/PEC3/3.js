/*
M4.250 - Introducción a la programación en JavaScript I aula 1
PEC 3
Alumno: Ivan Schartun
*/


//Definición de variable
const phrase =  prompt ("Ingrese un frase");
const vowels = ["a", "e", "i", "o", "u", "á", "é", "í", "ó", "ú"];
let phraseSplited;
let newValue;
let newPhrase;

//Método de calculo

if ( phrase == null || phrase === "" || isNaN(phrase) === false) {

  console.log("La frase ingresada no es valida, cargue el programa e intente nuevamente");

} else {
  phraseSplited = phrase.split("");
  
  for ( let i = 0; i < phraseSplited.length; i++ ) {
    for (let j = 0; j < vowels.length; j++) {
      if ( phraseSplited[i] === vowels[j] ) {
        newValue = phraseSplited[i] + "p" + phraseSplited[i];
        phraseSplited[i] = newValue;
        newPhrase = phraseSplited.join("");

      }
    }
  } 
  //Método de presentación por consola
  if (newPhrase === undefined) {
    newPhrase = "La información ingresada no contiene vocales, cargue el programa e intende nuevamente";
  }
  console.log(newPhrase); 
} 

  