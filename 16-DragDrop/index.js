const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")
const papelera = document.querySelector(".papelera")

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", e => {
        //Añadimos una clase al elemento que está siendo arrastrado
        parrafo.classList.add("dragging")
        //Guardamos el id del párrafo 
        e.dataTransfer.setData("id", parrafo.id)
        //Definimos imagen de fondo cuando arrastramos
        const elemento_fantasma = document.querySelector(".imagen-fantasma")
        e.dataTransfer.setDragImage(elemento_fantasma, 0, 0)
    });

    parrafo.addEventListener("dragend", () => {
        //Eliminamos clase arrastrado
        parrafo.classList.remove("dragging")
    });
})


secciones.forEach(seccion => {

    seccion.addEventListener("dragover", e => {
        e.preventDefault();
    });
    seccion.addEventListener("drop", e => {
    //Obtenemos id guardado antes
    const id_parrafo = e.dataTransfer.getData("id")
    //Recuperamos el parrafo correspondiente al id y añadimos a la sección
    const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
    });

    papelera.addEventListener("dragover", e =>{
        e.preventDefault();
    });
    papelera.addEventListener("drop", e => {
    const id_parrafo = e.dataTransfer.getData("id")
    const parrafo = document.getElementById(id_parrafo)
        seccion.removeChild(parrafo)
    });
})






