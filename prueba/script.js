let titulo = document.getElementById ("h1")

let segundo = document.getElementById ("h2")

let boton = document.getElementById ("boton")

boton.addEventListener("click", () => {
    if (titulo.style.display == "none") {
        titulo.style.display = "block"; // Mostrar el elemento
    } else {
        titulo.style.display = "none"; // Ocultar el elemento
    }

    if (segundo.style.display == "none") {
        segundo.style.display = "block"; // Mostrar el elemento
    } else {
        segundo.style.display = "none"; // Ocultar el elemento
    }
});