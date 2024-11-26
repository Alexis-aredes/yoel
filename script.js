let h1 = document.getElementById("h1");
let boton = document.getElementById("boton1");

// Inicializamos el h1 con opacity 0
h1.style.opacity = "0";
h1.style.transition = "opacity 1.5s ease"; // Transición para el h1

boton.addEventListener("click", () => {
    if (h1.style.opacity == "0") {
        h1.style.opacity = "1"; // Mostrar el h1 con opacity
        boton.style.backgroundColor = "rgb(251, 189, 5)";
        boton.style.transform = "scale(1.2)";
        boton.style.transition = "transform 1.5s ease"; // Transición para el botón
    } else {
        h1.style.opacity = "0"; // Ocultar el h1 con opacity
        boton.style.backgroundColor = "rgb(251, 189, 5)";
        boton.style.transform = "scale(1)";
    }
});




