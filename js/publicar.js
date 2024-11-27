//Aquí va el js necesario para la sección "Publicar articulo"


document.addEventListener('DOMContentLoaded', function() {
    const campos = document.querySelectorAll('.form-publicar input, .form-publicar select, .form-publicar textarea');
    
    campos.forEach(campo => {
        campo.addEventListener('blur', function() {
            if (campo.value === '') {
                campo.style.borderBottom = '2px solid #e74c3c'; // Rojo si el campo está vacío
            } else {
                campo.style.borderBottom = '2px solid #566975'; // Color terciario si está completado
            }
        });

        campo.addEventListener('focus', function() {
            campo.style.borderBottom = '2px solid #566975'; // Color terciario al enfocar
        });
    });
});

