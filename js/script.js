//De momento este archivo no se está usando :)
// script.js
document.getElementById("formulario-producto").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("¡Producto publicado exitosamente!");
});

const entradas = document.querySelectorAll("input, textarea");

entradas.forEach((entrada) => {
    entrada.addEventListener("invalid", () => {
        entrada.style.borderColor = "gray";
    });

    entrada.addEventListener("input", () => {
        entrada.style.borderColor = "";
    });
});
