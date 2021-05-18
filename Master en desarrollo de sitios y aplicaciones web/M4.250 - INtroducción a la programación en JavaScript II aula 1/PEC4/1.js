/*
M4.250 - Introducción a la programación en JavaScript II aula 1
PEC 4
Alumno: Ivan Schartun
*/

//Definición de funciones


// de Celsius a Fahrenheit

function celsiusToFahrenheit (celsius) {
    var fahrenheit = ( parseFloat(celsius) *  9/5 ) + 32;   
    return fahrenheit;
  }
  
  // de Fahrenheit a Celsius
  
  function fahrenheitTocelsius (fahrenheit) {
    var celsius = 5/9 * ( parseFloat(fahrenheit) - 32 );   
    return celsius;
  }
  
  // de Kelvin a Celsius
  
  function kelvinTocelsius (kelvin) {
    var celsius = parseFloat(kelvin) - 273.15; 
    return celsius;
  }
  
  // de Celsius a Kelvin
  
  function celsiusTokelvin (celsius) {
    var kelvin = parseFloat(celsius) + 273.15; 
    return kelvin;
  }
  
  // de Fahrenheit a Kelvin
  
  function fahrenheitTokelvin (fahrenheit) {
    var kelvin = ( ( parseFloat(fahrenheit) - 32 ) / 1.8 )  + 273.15 ; 
    return kelvin;
  }
  
  // de Kelvin a Fahrenheit
  
  function kelvinTofahrenheit (kelvin) {
    var fahrenheit = ( ( parseFloat(kelvin) - 273.15 ) * 1.8 )  + 32  ; 
    return fahrenheit;
  }
  
  // conjunto de pruebas para comprobar su funcionamiento
  
  console.log(celsiusToFahrenheit(1));  // 1C equivale aprox 33.8F 
  console.log(celsiusToFahrenheit(27)); // 27C equivale aprox 80.6F  
  console.log(celsiusToFahrenheit(36)); // 36C equivale aprox 96.8F
  
  console.log(fahrenheitTocelsius(33.8));  // 33.8F equivale aprox 1C
  console.log(fahrenheitTocelsius(80.6)); // 80.6F equivale aprox 27C 
  console.log(fahrenheitTocelsius(96.8)); // 96.8F equivale aprox 36C
  
  console.log(kelvinTocelsius(1));  // 1C equivale aprox -272.15K 
  console.log(kelvinTocelsius(27)); // 27C equivale aprox -246.15K  
  console.log(kelvinTocelsius(400)); // 400C equivale aprox 126.85K
  
  console.log(celsiusTokelvin(-272.15));  // -272.15K equivale aprox  1C 
  console.log(celsiusTokelvin(-246.15)); // -246.15K equivale aprox 27C  
  console.log(celsiusTokelvin(126.85)); // 126.85K equivale aprox 400C  
  
  console.log(fahrenheitTokelvin(1));  // 1C equivale aprox 255.927778K 
  console.log(fahrenheitTokelvin(70)); // 70C equivale aprox 294.261111K  
  console.log(fahrenheitTokelvin(-10)); // -10C equivale aprox 249.816667K  
  
  console.log(kelvinTofahrenheit(255.927778));  // 255.927778K equivale aprox  1C 
  console.log(kelvinTofahrenheit(294.261111)); // 294.261111K equivale aprox 70C   
  console.log(kelvinTofahrenheit(249.816667)); // 249.816667K equivale aprox -10C    
  
  