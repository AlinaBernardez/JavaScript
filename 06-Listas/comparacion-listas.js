///Comparar listas .every()

const ar1 = [1, 2, 3, 4, 5]
const ar2 = [1, 2, 3, 4, 5]

///¡LAS LISTAS NO SE PUEDEN COMPARAR TAL CUAL! HAY QUE CREAR UNA FUNCIÓN

const compararArrays = (array_1, array_2) => {
    if (array_1.lenght !== array_2.lenght) return false
    const resultado = array_1.every((valor, i) => valor === array_2[i])
    return resultado
}

console.log(compararArrays(ar1, ar2))