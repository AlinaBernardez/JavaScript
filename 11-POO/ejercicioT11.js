class Estudiante {
    nombre;
    asignaturas = ["JavaScript", "HTML", "CSS"]

    constructor(nombre, asignaturas) {
        this.nombre = nombre;
        this.asignaturas = asignaturas;
    }

    getData() {
        console.log(`Nombre estudiante: ${this.nombre}, asignaturas cursadas: ${this.asignaturas}`)
    }
}

const estudiante1 = new Estudiante("Alina", ["JavaScript", "HTML"])
estudiante1.getData();
