const datosPersonales = {
    nombre: "Alina",
    apellido: "Bernárdez",
    edad: 33,
    altura: 173,
    isDeveloper: true,
}

const verEdad = datosPersonales.edad;

const datosAlina = [datosPersonales];
console.log(datosAlina)

const datosGente = [
    {
    nombre: "Héctor",
    apellido: "Herrer",
    edad: 34,
    altura: 183,
    isDeveloper: false,
    },
    {
    nombre: "Lucia",
    apellido: "Gallego",
    edad: 31,
    altura: 173,
    isDeveloper: false,
    }
]

const gentePorEdad = datosGente.sort((a, b) => a.edad + b.edad);
console.log(gentePorEdad)