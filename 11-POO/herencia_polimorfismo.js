// HERENCIA

class Persona {
    nombre;
    edad;

    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }

    saludo() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`)
    }
}

class Desarrollador extends Persona {
    lenguaje;

    constructor(nombre, edad, lenguaje) {
        super(nombre, edad)
        this.lenguaje = lenguaje
    }

    //POLIMORFISMO
    saludo() {
        super.saludo()
        console.log(`Soy desarrollador y mi lenguaje es ${this.lenguaje}.`)
    }
}

const newDev = new Desarrollador("Alina", 33, "JavaScript")
console.log(newDev)
newDev.saludo()