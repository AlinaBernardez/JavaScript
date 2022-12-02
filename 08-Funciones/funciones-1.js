/// Función con parámetros por defecto.

function imprimeNum(numero = 7) {
    return numero
}

console.log(imprimeNum())

/// Utilizando el factor de propagación como parámetro, para sumar números consecutivos.

function suma(...nums) {
    return nums.reduce((a,b) => a + b)
}

console.log(suma(1,2,3,4,))


