let boton = document.getElementById("boton1")
boton.addEventListener("click",() => {
    if (boton.style.backgroundColor === "rgb(224, 168, 4)") {
        boton.style.backgroundColor = "red";
        boton.innerText = "dea q le pasaba"
    } else {
        boton.style.backgroundColor = "rgb(224, 168, 4)";
        boton.innerText = "Dale Click Aquí"
    }
    if (boton.style.transform === "scale(1.2)") {
        boton.style.transform = "scale(1)"; // Tamaño original
    } else {
        boton.style.transform = "scale(1.2)"; // Escala a 1.2 veces su tamaño
    }
    if (texto) {
        texto.innerText = "Feliz Cumple Sorete"
        
    } else {
        texto.innerText = "FREE FIRE"
    }
})

boton.addEventListener("mouseenter",() =>{
    boton.style.backgroundColor = "rgb(224, 168, 4)"
    boton.style.transform = "scale"
    boton.style.transition = "transform 0.3s ease"
    
})
boton.addEventListener("mouseleave",() =>{
    boton.style.backgroundColor = "rgb(251, 189, 5)";
    
})
let texto = document.getElementById ("texto")

if (texto) {
    texto.innerText
    
} else {
    
}


