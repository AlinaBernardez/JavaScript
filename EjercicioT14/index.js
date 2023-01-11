const boton = document.getElementById("btn")

boton.addEventListener("click", () => {
    alert("Click en botón")
})

$(() => {
    $("#jq-btn").click(() => {
        console.log("Hola, estoy utilizando jQuery")
    })
})