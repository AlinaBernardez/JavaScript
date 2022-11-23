/*
Una cadena de texto con tu Nombre
Otra cadena de texto con tu Apellido
Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
*/

let nombre = "Alina";
let apellido = "Bernárdez";

let estudiante = nombre.concat(" " + apellido);

console.log(estudiante);

/*- Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas

- Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas*/

let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();

console.log(estudianteMayus);
console.log(estudianteMinus);

let contar = estudiante.length;
let primeraLetra = nombre.charAt(0);
let ultimaLetra = estudiante.charAt(14);
let noSpace = estudiante.replace(" ", ".");
let include = estudiante.includes(nombre);

console.log(contar)
console.log(primeraLetra)
console.log(ultimaLetra)
console.log(noSpace)
console.log(include)