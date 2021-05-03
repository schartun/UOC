/*
M4.250 - Introducción a la programación en JavaScript I aula 1
PEC 3
Alumno: Ivan Schartun
*/


//Definición de variable
const phrase = "Hola qué tal";
const vowels = ["a", "e", "i", "o", "u", "á", "é", "í", "ó", "ú"];
let phraseSplited = phrase.split("");
let newValue;
let newPhrase;

for ( let i = 0; i < phraseSplited.length; i++ ) {
  for (let j = 0; j < vowels.length; j++) {
    if ( phraseSplited[i] === vowels[j] ) {
      newValue = phraseSplited[i] + "p" + phraseSplited[i];
      phraseSplited[i] = newValue;
    }
  }newPhrase = phraseSplited.join("");
  
}console.log(newPhrase);
  
  