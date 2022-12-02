/// Funciones tipo flecha

const array = [1, 2, 3, 4, 5, 6, 7]

const array2 = array.map((valor) => valor * 2 )
console.log(array2)

/// También se puede crear como variable e invocar después:

const dobleValor = valor => valor * 2
const array3 = array.map(dobleValor)
console.log(array3)