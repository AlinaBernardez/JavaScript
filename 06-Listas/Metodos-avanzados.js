//Métodos avanzados
// .map() .filter() .reduce()

const array1 = ["Alicante", "Madrid", "Santander", "Barcelona"]

const newArray1 = array1.map((valor, indice) => {
    return `${indice + 1} - ${valor}`;
})

console.log(newArray1)

////

const listaObjetos = [
    { nombre: "Alina", edad:33},
    { nombre: "Hector", edad:34},
    { nombre: "Lucía", edad:31},
    { nombre: "Ali", edad:28},
]

const personasMay = listaObjetos.filter (objeto => {
    if (objeto.edad > 30) {
        return true
    }else {
        return false
    }
})
console.log(personasMay)

//Es lo mismo y más corto:

const personasMay2 = listaObjetos.filter (objeto => objeto.edad > 30);
console.log(personasMay2)


///

