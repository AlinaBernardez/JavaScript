///Función sin parámetros que devuelve siempre "true"

function alwaysTrue() {
    return true;
}

/*Función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado */

function miAsinc() {
    setTimeout(() => {console.log("Hola soy una promesa")}, 5000);
}

const miPromesa = new Promise((resolve, reject) => {
    if(true) resolve()
    else reject()
})

miPromesa
    .then((miAsinc()))
    .catch(() => console.log("ERROR"))
    .finally(() => console.log("Siempre"))


/// Función generadora de índices pares automáticos

function* idPar() {
    let indice = 1;
    while (indice < 100) {
        yield indice * 2
        indice++
    }
}

const indNuevo = idPar();