// FACTORY FUNCTION:

const creaPersona = (nombre, edad, isDev) => {
    return {
        nombre,
        edad,
        isDev,
        saludo: function() {
            console.log("Hello")
        }
    }
}

const persona1 = creaPersona("Alina", 33, true)
console.log(persona1)


// EXISTE OTRA FORMA MÁS ÓPTIMA PARA CREAR OBJETOS: clases
