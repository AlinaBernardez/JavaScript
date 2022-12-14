const Persona = {
    nombre: "Alina",
    edad: 33,
}
console.log(Persona)

function obtenDoble(edad) {
    return 2 * edad
}

const dobeEdad = obtenDoble(Persona.edad)
console.log(dobeEdad)

function creaArray(edad) {
    let arrayNums = [];
    for(let i = 0; i < 10; i++) {
        const numero = edad + i
        arrayNums = [...arrayNums, numero]
    }
    return arrayNums;
}

const array1 = creaArray(Persona.edad)
console.log(array1)