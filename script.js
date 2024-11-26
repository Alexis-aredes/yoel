let boton = document.getElementById("boton1")
boton.addEventListener("click",() => {
    if (boton.style.backgroundColor == "rgb(224, 168, 4)") {
        boton.style.backgroundColor = "red";
    } else {
        boton.style.backgroundColor = "rgb(224, 168, 4)";
    }
    if (boton.style.transform === "scale(1.2)") {
        boton.style.transform = "scale(1)"; // Tamaño original
    } else {
        boton.style.transform = "scale(1.2)"; // Escala a 1.5 veces su tamaño
    }
})

boton.addEventListener("mouseenter",() =>{
    boton.style.backgroundColor = "rgb(224, 168, 4)"
    boton.style.transform = "scale"
    
})
boton.addEventListener("mouseleave",() =>{
    boton.style.backgroundColor = "rgb(251, 189, 5)";
    
})
let texto = document.getElementById ("texto")

