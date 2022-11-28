/// .sort() --> MODIFICA el array

const array = [1, 5, 1231, 6, 40, 23, 7]

array.sort((a, b) => {
    if (a < b) {
        return -1
    } else if(a > b) {
        return +1
    } else {
        return 0
    }
}) 

console.log(array)

/// Para arrays numéricos hay una forma más sencilla de formular:

const arrayNum = [76, 3, 98, 13, 21, 9, 3, 5]

arrayNum.sort((a, b) => a - b)
console.log(arrayNum)

///Para ordenar arrays de objetos:

const listaObjetos = [
    { nombre: "Alina", edad:33},
    { nombre: "Hector", edad:34},
    { nombre: "Lucía", edad:31},
    { nombre: "Ali", edad:28},
]

listaObjetos.sort((a, b) => a.edad - b.edad)
console.log(listaObjetos)