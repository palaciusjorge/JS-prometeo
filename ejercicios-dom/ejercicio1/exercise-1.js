// 1.1 - Seleccionar el botón con la clase .showme
const boton = document.querySelector('.showme');
console.log(boton);

// 1.2 - Seleccionar el h1 con el id #pillado
const titulo = document.querySelector('#pillado');
console.log(titulo);

// 1.3 - Seleccionar todos los <p>
const parrafos = document.querySelectorAll('p');
console.log(parrafos);

// 1.4 - Seleccionar todos los elementos con la clase .pokemon
const pokemons = document.querySelectorAll('.pokemon');
console.log(pokemons);

// 1.5 - Seleccionar todos los elementos con el atributo data-function="testMe"
const personajes = document.querySelectorAll('[data-function="testMe"]');
console.log(personajes);

// 1.6 - Mostrar el tercer personaje con el atributo data-function="testMe"
const tercerPersonaje = personajes[2];
console.log(tercerPersonaje);
