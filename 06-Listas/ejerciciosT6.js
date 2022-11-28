let listaCompra = ["Pan", "Queso", "Fruta", "Verdura", "Papel"]
//Añadir elemento
listaCompra.push("Aceite de girasol")

//Quitar elemento
listaCompra.pop("Aceite de girasol")


//Lista de objetos peliculas
const peliculasTop = [
    {titulo: "Whiplash", director: "Damien Chazelle", fecha: 2014},
    {titulo: "Inception", director: "Christopher Nolan", fecha: 2010},
    {titulo: "Interstellar", director: "Christopher Nolan", fecha: 2014}
]

//Filtrar las pelis posteriores a 2010
const pelisModernas = peliculasTop.filter(valor => valor.fecha > 2010)
console.log(pelisModernas)

//Listar directores:
const directoresTop = peliculasTop.map(direc => direc.director)
console.log(directoresTop)
//Listar pelis:
const nombresPelis = peliculasTop.map (nombre => nombre.titulo)
console.log(nombresPelis)


//Concatenar listas:
const listaNueva = directoresTop.concat(nombresPelis)
console.log(listaNueva)

//Spread:
const listaCombi = [...directoresTop, ...nombresPelis]
console.log(listaCombi)