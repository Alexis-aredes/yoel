let titulo = document.getElementById ("h1")

let segundo = document.getElementById ("h2")

let boton = document.getElementById ("boton")

boton.addEventListener("click", () => {
    // Cambiar la visibilidad del primer elemento (titulo)
    if (titulo.style.display == "none") {
        titulo.style.display = "block"; // Mostrar el elemento
        boton.innerText = "Ola"; // Cambiar el texto del botón
    } else {
        titulo.style.display = "none"; // Ocultar el elemento
        boton.innerText = "Iniciar Juego"; // Restaurar el texto original
    }

    // Cambiar la visibilidad del segundo elemento (segundo)
    if (segundo.style.display == "none") {
        segundo.style.display = "block"; // Mostrar el elemento
    } else {
        segundo.style.display = "none"; // Ocultar el elemento
    }
});

