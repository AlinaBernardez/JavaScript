
/// Funcion saludar

function saludar(nombre) {
    return `Hola ${nombre}`
}

console.log(saludar("Alina"))

/// Funcion despedir con variable definida. 
/*Aunque definamos la variable "nombre" dentro de la función, nombre_1 no se verá afectada
al ser un dato primitivo */

let nombre_1 = "Alina"

function despedir(nombre) {
    return `Adiós ${nombre}`
}

console.log(despedir(nombre_1))

/// Funcion saludar con objeto.
/*OJO!! Si llegásemos a definir uno de los valores del objeto dentro de la función, al invocarla
CAMBIARÍAMOS LOS VALORES DEL OJETO */

let persona = { nombre: "Alina", apellido: "Bernardez" }

function saludarCompleto(objeto) {
    return `Hola ${objeto.nombre} ${objeto.apellido}`
}

console.log(saludarCompleto(persona))