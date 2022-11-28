const obj = {
    id: 3,
    nombre: "Alina",
    apellido: "Bernardez",
    isDeveloper: true
}

///Ordenar objetos según una propiedad:

const listaPelis = [
    {titulo: "Whiplash", director: "Damien Chazelle", fecha: 2014},
    {titulo: "Inception", director: "Christopher Nolan", fecha: 2010},
    {titulo: "Interstellar", director: "Christopher Nolan", fecha: 2014},
    {titulo: "Pulp Fiction", director: "Quentin Trantino", fecha: 1994}
]

const listaOrden = listaPelis.sort((a, b) => a.fecha - b.fecha)
console.log(listaOrden)