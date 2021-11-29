let container = document.querySelector("main");
let subtitulo = document.querySelector(".subtitulo");
let link = document.querySelector("a");
let parrafos = document.querySelectorAll("p");

window.addEventListener("load", () => {
    let name = prompt("​Ingrese su nombre")
    
    name ? subtitulo.innerText += name : subtitulo.innerText += "Invitado"
})

subtitulo.style.textTransform = "uppercase"
link.style.color = "#E51B3E"

window.addEventListener("load", () => {
    let respuesta = confirm("¿Desea colocar un fondo de pantalla?​")

    respuesta ? container.classList.add("fondo") : null
})

for (let i = 0; i < parrafos.length; i++) {
    (i % 2 != 0) ? parrafos[i].classList.add("destacadoPar") : parrafos[i].classList.add("destacadoImpar")
}

container.style.display = "block"