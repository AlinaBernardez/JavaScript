/// Funciones asíncornas

function miAsinc() {
    //Llamada a BBDD externa 
    //No sabemos cómo va a reaccionar la función
}

//creamos una "Promise" para filtrar posibles errores

const miPromesa = new Promise ((resolve, reject) => {
    let i = Math.floor(Math.random() * 2)
    if (i !== 0) resolve()
    else reject()
})

//invocamos 

miPromesa
    .then(() => console.log("Se ha ejecutado ok"))
    .catch(() => console.log("ERROR"))
    .finally(() => console.log("Me ejecuto siempre"))

    