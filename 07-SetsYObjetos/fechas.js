///Hay 4 formas de definir fechas:

const fecha = new Date();
console.log(fecha)

const birthDate = new Date(1989, 3, 1);
console.log(birthDate)

const fecha3 = new Date (1000000000000);
console.log(fecha3)

const fecha4 = new Date ("August 30, 1988, 20:15:00");
console.log(fecha4)


///Comparar fechas: .getTime()

console.log(birthDate.getTime() === fecha4.getTime())

///Obtener datos de la fecha (día, mes, año)

console.log(birthDate.getDate())
console.log(birthDate.getMonth() + 1)
console.log(birthDate.getFullYear())

///Para mostrar le fecha en otro formato:

console.log(birthDate.toLocaleDateString("en-GB"));
