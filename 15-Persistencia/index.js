/*
// GUARDAMOS INFORMACIÓN KEY-VALUE
localStorage.setItem("nombre", "Alina");
// PARA RECUPERAR ESA INFO
console.log(localStorage.getItem("nombre"));


// PARA ALMACENAR UN OBJETO O ARRAY
localStorage.setItem("persona", JSON.stringify({nombre: "Alina", edad: 33}));
// PARA RECUPERAR INFO DEL OBJETO O ARRAY
console.log(JSON.parse(localStorage.getItem("persona")));


// SESSION STORAGE FUNCIONA IGUAL

// COOKIES:
document.cookie = "nombreCookie=AlinaCookie";

document.cookie = "nombreCaducidad=CadCookie; expires=" + new Date(2023, 0, 31).toUTCString();

console.log(document.cookie);
*/

const miNombre = "Alina";
const miApellido = "Bernárdez";
const nombre = {
    miNombre,
    miApellido
}

sessionStorage.setItem("persona", JSON.stringify(nombre));
localStorage.setItem("persona", JSON.stringify(nombre));

function plusTwo() {
    const now = new Date();
    const minutesNow = now.getMinutes();
    now.setMinutes(minutesNow + 2);
    return now.toUTCString();
}

document.cookie = "nombreCookie=nombre; expires=" + plusTwo();