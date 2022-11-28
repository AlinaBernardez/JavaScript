const array = [10, 20, 30, 40, 50, 60];

//Método anticuado:
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

//Método más eficiente:

array.forEach ( valor => {
    console.log(valor);
})

let suma = 0;
const arrayNum = [12, 90, 4, 7, 132];

arrayNum.forEach (valor1 => {
    suma += valor1;
    console.log(valor1);
})
console.log(suma);

//Buscar un valor dentro de un Array 

const buscarValor = array.find(valor => {
    if (valor === 40) {
        return true;
    }
})
console.log(buscarValor)

//EJEMPLO con lista de objetos:

const listaObjetos = [
    { nombre: "Alina", edad:33},
    { nombre: "Hector", edad:34},
    { nombre: "Lucía", edad:31},
    { nombre: "Ali", edad:28},
]

const buscarEdad = listaObjetos.find (buscador => {
    if (buscador.nombre === "Hector") {
        return true
    }
})
console.log(buscarEdad.edad)

//MEJOR AUN:

const buscarEdad2 = listaObjetos.find (buscador => buscador.nombre === "Hector") 
console.log(buscarEdad.edad)

const { edad } = listaObjetos.find (buscador => buscador.nombre === "Alina") 
console.log(edad)