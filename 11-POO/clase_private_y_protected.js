class Persona {
    // PRIVATE --> # para acceder sólo desde dentro de la clase
    #nombre;
    #edad;

    // PROTECTED --> _ para acceder sólo desde dentro de la clase y clases hijas
    _isDev;

    constructor(nombre, edad, isDev) {
        this.#nombre = nombre
        this.#edad = edad
        this._isDev = isDev
    }

    saludo() {
        console.log(`Hola, mi nombre es ${this.#nombre} y tengo ${this.#edad} años.`)
    }

    getEdad() {
        return this.#edad
    }

    setEdad(newEdad) {
        this.#edad = newEdad
    }
}

const persona1 = new Persona("Alina", 33, true)
console.log(persona1)
persona1.saludo()

// GETTER --> método que nos permite acceder a atributos/métodos privados o protegidos.
// SETTER --> método que nos permite modificar el valor de atributos privados o protegidos.

const edad = persona1.getEdad();
console.log(edad)

persona1.setEdad(34)
console.log(persona1.getEdad());