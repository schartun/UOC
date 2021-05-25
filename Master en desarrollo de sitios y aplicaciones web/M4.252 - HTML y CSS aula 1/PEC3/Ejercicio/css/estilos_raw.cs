/* font-family: 'Alegreya', serif;
font-family: 'Open Sans', sans-serif; */
/*
-------------------------------------------------------------------------------------------------------------------
En esta sección se dará formato general a los elementos generales del sitio web, comunes para todas las paginas
-------------------------------------------------------------------------------------------------------------------
*/
/* Regla que permite establecer variables generales de colores */
:root {
  --text-color: rgb(0, 0, 0);
  --text-bg-color: rgb(255, 255, 255);
  --contrast-color: rgb(189, 55, 0);
  --bg-dark-color: rgb(0, 0, 0);
  --bg-light-color: rgba(0, 0, 0, 0.1);
}

/* Regla que permite un reset general */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Alegreya", serif;
  font-weight: 400;
  color: var(--text-color);
  line-height: 1.5;
  font-size: 10px;
}

h1,
h2 {
  font-weight: 700;
}

p {
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

a {
  color: var(--contrast-color);
  text-decoration: none;
}

a:hover {
  color: var(--text-color);
}

ul {
  list-style-type: none;
}

cite {
  font-style: normal;
}

abbr {
  text-decoration: none;
}

h1 {
  font-size: 3rem;
}

h2 {
  font-size: 2rem;
}

h3 {
  font-size: 1.75rem;
  margin-bottom: 1rem;
}

/*
-------------------------------------------------------------------------------------------------------------------
En esta sección se establecerá un contenedor general para todas las páginas. Al mismo tiempo se definirán los cambios que deben ejecutarse según dimensión del viewport
-------------------------------------------------------------------------------------------------------------------
*/
/* en esta regla se estable la dimensión general  del contendor general para todas las paginas */
.container {
  margin-right: auto;
  margin-left: auto;
  width: 90%;
}

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

/* @media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
} */

@media (min-width: 950px) {
  .container {
    max-width: 800px;
  }
}

/* @media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
} */

/* @media (min-width: 1200px) {
  .container {
    max-width: 1000px;
  }
} */

main {
  padding-top: 3rem;
  padding-bottom: 7rem;
}

/*
-------------------------------------------------------------------------------------------------------------------
En esta sección se dará formato al header del sitio web que es común para todas sus paginas
-------------------------------------------------------------------------------------------------------------------
*/
/* Regla dar espacio de barra de navegacion y tope de cabecera*/
div.container {
  margin-top: 0.9rem;
}

/* Regla para horizontalizar los enlaces del menu */
nav {
  margin-top: 0.6rem;
}

nav ul {
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 0.8rem;
}

div.container img {
  display: block;
  margin: 0 auto;
  width: 16rem;
  height: auto;
}

/* Reglas para dar formato a cada enlace en el menú */
nav a {
  color: var(--text-color);
  font-family: "Open Sans", sans-serif;
  font-weight: 800;
}

nav a:hover {
  color: var(--contrast-color);
}

nav li.active {
  border-bottom: 3px solid var(--text-color);
}

/* Reglas para modificar propiedades a pantallas mayores a 768px */
@media (min-width: 950px) {
  nav ul {
    flex-direction: row;
    font-size: 1.1rem;
  }

  div.container img {
    display: initial;
    width: 10rem;
    height: auto;
  }

  nav ul li {
    margin-right: 2rem;
  }
}

/* Regla dar espacio de barra de navegacion y tope de cabecera*/
/* div.container {
  margin-top: 0.9rem;
} */
/* Regla para horizontalizar los enlaces del menu */
/* nav {
  margin-top: 0.6rem;
}

nav ul li {
  font-size: 1.1rem;
  margin-right: 1.2rem;
  text-align: center;
} */
/* Reglas para dar formato a cada enlace en el menú */
/* nav a {
  color: var(--text-color);
  font-family: "Open Sans", sans-serif;
  font-weight: 800;
}

nav a:hover {
  color: var(--contrast-color);
}

nav li.active {
  border-bottom: 3px solid var(--text-color);
}

div.container a img {
  margin: 0 auto;
  display: block;
} */
/* Query para permitir que un view port mas amplio se coloquen de forma horizontal los items den nav */
/* @media (min-width: 600px) {
  nav ul li {
    display: inline-block;
  }

  div.container a img {
    display: inherit;
    width: 20%;
    height: auto;
  }
} */
/*
-------------------------------------------------------------------------------------------------------------------
En esta sección se dará formato al footer del sitio web que es común para todas sus paginas
-------------------------------------------------------------------------------------------------------------------
*/
/* Regla para dar estilo general a la seccion de footer */
footer {
  padding-top: 3rem;
  padding-bottom: 1.5rem;
  background-color: var(--bg-dark-color);
  color: var(--text-bg-color);
  font-family: "Open Sans", sans-serif;
  text-align: center;
}

/* Regla para adecuar el tamano del logo */
footer div.container img {
  display: block;
  margin: 0 auto;
  width: 16rem;
  height: auto;
}

/* Regla para adecuar correo electornico en footer */
footer div.container>a {
  display: block;
  font-size: 0.8rem;
  margin-top: 0.6rem;
}

/* Reglas para dar formato a cada enlace en el footer  */
footer a {
  color: var(--text-bg-color);
}

footer a:hover {
  color: var(--contrast-color);
}

/* Reglas para dar estilo a newsletter */
footer span {
  font-style: italic;
}

/* Reglas para dar estilo a los campos de la forma */
footer form {
  margin-top: 3rem;
  margin-bottom: 2rem;
}

::placeholder {
  color: grey;
  text-align: center;
  font-size: 1.1rem;
}

input[type="email"] {
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 1.2rem;
  border: none;
  background-color: var(--bg-dark-color);
  border-bottom: 0.1rem solid var(--text-bg-color);
}

input[type="checkbox"] {
  margin-top: 0.8rem;
  margin-bottom: 0.8rem;
  margin-right: 0.2rem;
}

footer label {
  font-size: 0.8rem;
}

button {
  border: none;
  padding: 0.5rem 0.8rem;
  margin: 0.4rem 0.2rem;
}

button:hover {
  background-color: var(--contrast-color);
  color: var(--text-bg-color);
}

/* Reglas para dar estilo al menu de navegación en footer */
footer ul li {
  display: inline-block;
  font-size: 0.7rem;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
}

div.bottomFooter ul+p {
  margin-top: 1.8rem;
}

div.bottomFooter p {
  margin-bottom: 0.5rem;
  font-size: 0.6rem;
}

.bottomFooter {
  margin-bottom: 2rem;
}

/* Reglas para modificar propiedades a pantallas mayores a 768px */

@media (min-width: 950px) {
  footer div.container img {
    width: 14rem;
  }

  input[type="email"] {
    width: 25rem;
  }

  button {
    font-size: 1.1rem;
  }

  form>p {
    font-size: 1.5rem;
  }

  footer ul li {
    font-size: 0.9rem;
  }
}

/* Regla para dar estilo a la seccion de footer, color, espacio */
/* footer {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  background-color: var(--bg-dark-color);
  color: var(--text-bg-color);
  font-family: "Open Sans", sans-serif;
  text-align: center;
} */
/* footer div.container {
  display: grid;
  justify-items: center;
  font-size: 0.8rem;
} */
/* footer ul li a {
  font-size: calc(0.6rem + 0.3vw);
}

footer ul li {
  margin-left: auto;
  margin-right: auto;
} */
/* Reglas para dar formato a cada enlace en el footer  */
/*
footer a {
  color: var(--text-bg-color);
}

footer a:hover {
  color: var(--contrast-color);
} */
/* Regla dar espacio en el límite superior de la forma*/
/* form {
  margin-top: 3rem;
} */
/* Reglas para estilo  de texto newsletter */
/* form > p {
  font-size: calc(0.7rem + 1.5vw);
}

form span {
  font-style: italic;
} */
/* Reglas para dar estilo a los campos de la forma */
/* ::placeholder {
  color: grey;
  text-align: center;
  font-size: 1.5rem;
}

input[type="email"] {
  width: 100%;
  padding: 1.8rem;
  margin: 0.8rem 0;
  border: none;
  background-color: var(--bg-dark-color);
  border-bottom: 0.1rem solid var(--text-bg-color);
}

footer label {
  font-size: calc(0.7rem + 0.3vw);
}

button {
  border: none;
  padding: 0.5rem 0.8rem;
  font-size: 1.4rem;
  margin: 0.4rem 0.2rem;
}

button:hover {
  background-color: var(--contrast-color);
  color: var(--text-bg-color);
}

.bottomFooter ul li {
  display: inline;
  margin-right: 1.2rem;
  font-size: 1.1rem;
}

div.bottomFooter p {
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
}

div.bottomFooter ul + p {
  margin-top: 1.8rem;
}

.bottomFooter {
  margin-bottom: 2rem;
}

footer div.container img {
  width: 60%;
  height: auto;
}

@media (min-width: 600px) {
  footer div.container img {
    width: 25%;
  }
} */
/*
-------------------------------------------------------------------------------------------------------------------
En esta sección se dará formato a index.htnl
-------------------------------------------------------------------------------------------------------------------
*/


/* Cabecera de sección de articulo, fondo e imagen */

section.hero {
  background: url(../img/bg-hero-mars.jpg);
  background-repeat: no-repeat;
  background-size: 11rem auto;
  background-position: right bottom;
  background-color: black;
  color: var(--text-bg-color);
  height: 16rem;
}

/* Reglas para dar estilo a los texto dentro de hero */

section.hero div {
  padding-top: 2rem;
  padding-left: 0.8rem;
}

section.hero h1 {
  margin-top:1.5rem;
  font-size: 1.8rem;
}

section.hero  p {
  font-style: italic;
  margin-top: 0.6rem;
}

ul.grid li img  {
  display:block;
  max-width: 100%;
}

/* Reglas para modificar propiedades a pantallas mayores a 768px */

@media (min-width: 480px) {
  section.hero {
    background-size: 20rem auto;
    background-position: 90%  bottom;
    height: 20rem;
  }

@media (min-width: 950px) {
  /* section.hero {
    background-size: 20rem auto;
    background-position: 90%  bottom;
    height: 20rem;
  } */

  section.hero div {
    padding-top: 0.2rem;
  }

  section.hero h1 {
  font-size: 4rem;

}

  section.hero  p {
    font-size: 1.9rem;

}

/* Cabecera de sección de articulo */
/* section.hero {
  background: url(../img/bg-hero-mars.jpg);
  background-repeat: no-repeat;
  background-size: 70% auto;
  background-position: right bottom;
  background-color: black;
  color: var(--text-bg-color);
  height: 20rem;
}

section.hero div {
  padding-top: 2rem;
  padding-left: 0.8rem;
}

section.hero div h1 {
  font-size: calc(1.7rem + 1.6vw);
}

section.hero div p {
  font-style: italic;
  font-size: calc(0.9rem + 1.5vw);
} */

/* Media query para pantallas superiores a px */
/* @media (min-width: 600px) {
  section.hero div {
    margin-left: 10rem;
  }

  section.hero div h1 {
    font-size: 4rem;
  }

  section.hero {
    background-size: contain;
    background-position: right;
    height: 25rem;
  }
} */

/* Reglas para encabezado de sección foto misiones */
section.container h2 {
  margin-top: 2rem;
  font-size: 1.7rem;
}

section.container p {
  font-size: 1.2rem;
}

ul.grid h3 {
  font-size: 1.5rem;
}

ul.grid p {
  font-size: 1rem;
  
}


ul.grid li h3 {
  padding-left:0.8rem;
}

ul.grid li p {
  padding-left:0.8rem;
  padding-right: 0.9rem;
}
}


@media (min-width: 576px) {
  ul.grid {
    display: grid;
    grid-template-columns:repeat(3, 1fr);

  }
ul.grid h3 {
  font-size: 1.3rem;
}

ul.grid p {
  font-size: 0.8rem;
}

  ul.grid li:nth-child(odd) {
  background-color: var(--bg-light-color);
}

}



/*
-------------------------------------------------------------------------------------------------------------------
En esta sección se dará formato a mars-2020.html
-------------------------------------------------------------------------------------------------------------------
*/


/* Regla que permite dar formato a la lista interna del artículo */

article section p + ul {
  font-size: 1.1rem;
  list-style-type: square;
  margin-left: 2rem;
}

/* Reglas que permiten aplcicar unas respuesta responsiva al video incrustado */

figure.video-fluid {
  position: relative;
  display: block;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
  overflow: hidden;
}

iframe.video-fluid-item {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.video-fluid::before {
  display: block;
  content: "";
  padding-top: 56.25%;
}
/* 
Regla para dar formato a la leyenda de video */

article div p {
font-size: 0.6rem;
text-align:center;
margin-top:0.6rem;

}
/* Reglas para dar formato a menú de navegación secundario */

aside {

font-family: 'Open Sans', sans-serif;
}

aside h3 {
font-size: 0.9rem;
font-weight:400
}

aside ul {
display: flex;
flex-direction: column;
list-style-type: none;
font-size:0.8rem
}

.activeAside {
font-weight:800;
}

/* Reglas Query para pantallas superiores a 950px */

@media (min-width: 950px) {

article {
  display:grid;
  grid-template-columns: 1fr 2fr;
}

article section {
grid-column: 2/3 ;
}

article aside {
  grid-column: 1 / 2 ;
  grid-row: 1/2;
  margin-top:3rem;
}

}

