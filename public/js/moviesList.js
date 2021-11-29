let body = document.querySelector("body");
let titulo = document.querySelector("h1");

window.addEventListener("load", () => {
    let respuesta = confirm("¿Desea modo oscuro?")

    respuesta ? body.style.backgroundColor = "#7f7f7f" : null

    titulo.innerText = "LISTADO DE PELíCULAS"
    titulo.style.color = "white"
    titulo.style.backgroundColor = "teal"
    titulo.style.padding = "20px"
})

