/// Para saber si un valor existe dentro de una lista .some()

const listaObjetos = [
    { nombre: "Alina", edad:33},
    { nombre: "Hector", edad:34},
    { nombre: "Lucía", edad:31},
    { nombre: "Ali", edad:28},
]

const existe = listaObjetos.some(persona => persona.nombre === "Alina")
console.log(existe)


