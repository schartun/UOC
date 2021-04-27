// Escribid un programa en JavaScript que, dada una frase, la transforme y escriba por consola de manera que después de cada vocal se añada una "p" y a continuación se repita la vocal.

// Ejemplo: si la entrada és "Hola qué tal", la salida debe ser "Hopolapa qupuépé tapal"

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
  
  