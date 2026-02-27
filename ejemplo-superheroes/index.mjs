import { leerSuperheroes, agregarSuperheroes } from "./utils.mjs";

const archivoOriginal = "./superheroes.txt";
const archivoNuevos = "./agregarSuperheroes.txt";

// Agregar nuevos superhéroes al archivo original
agregarSuperheroes(archivoOriginal, archivoNuevos);

// Leer y mostrar la lista de superhéroes ordenada
const superheroes = leerSuperheroes('./superheroes.txt');
console.log('Superhéroes ordenados:');
console.log(superheroes);