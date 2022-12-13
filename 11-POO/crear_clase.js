class Persona {
    nombre;
    edad;
    isDev;

    constructor(nombre, edad, isDev) {
        this.nombre = nombre
        this.edad = edad
        this.isDev = isDev
    }

    saludo() {
        console.log(`Hola, mi nombre es ${this.nombre}.`)
    }
}

const persona1 = new Persona("Alina", 33, true)
console.log(persona1)
persona1.saludo()