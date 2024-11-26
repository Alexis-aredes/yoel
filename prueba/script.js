let titulo = document.getElementById ("h1")

let segundo = document.getElementById ("h2")

let boton = document.getElementById ("boton")

let enlace = document.getElementById ("enlace")

boton.addEventListener("click", () => {
    // Cambiar la visibilidad del primer elemento (titulo)
    if (titulo.style.display == "none" || titulo.style.display == "") {
        titulo.style.display = "block"; // Mostrar el titulo
        segundo.style.display = "block"; // Mostrar el segundo elemento
        enlace.style.display = "block"; // Mostrar el enlace
        boton.innerText = "Ola"; // Cambiar el texto del botón
    } else {
        titulo.style.display = "none"; // Ocultar el titulo
        segundo.style.display = "none"; // Ocultar el segundo elemento
        enlace.style.display = "none"; // Ocultar el enlace
        boton.innerText = "Iniciar Juego"; // Restaurar el texto original
    }
});



