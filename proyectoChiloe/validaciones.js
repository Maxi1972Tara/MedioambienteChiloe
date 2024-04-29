$(document).ready(function() {
    // Validaciones
    $('#formulario').submit(function(e) {
        e.preventDefault(); // Evitar el envío del formulario por defecto
        // Realizar validaciones aquí y mostrar mensajes de error si es necesario
        // Por ejemplo:
        var rut = $('#rut').val();
        if (rut.length < 9 || rut.length > 10) {
            alert('El Rut debe tener entre 9 y 10 caracteres.');
            return;
        }
        // Agregar más validaciones para los otros campos...
        // Si todas las validaciones pasan, entonces se puede enviar el formulario
        this.submit();
    });

    // Función para crear carta
    $('#crear_carta').click(function() {
        var cartaText = "Carta de presentación e intención para postular al trabajo:\n\n";
        cartaText += "Nombre: " + $('#nombre').val() + "\n";
        cartaText += "Apellido Paterno: " + $('#apellido_paterno').val() + "\n";
        cartaText += "Apellido Materno: " + $('#apellido_materno').val() + "\n";
        cartaText += "Rut: " + $('#rut').val() + "\n";
        cartaText += "Fecha de Nacimiento: " + $('#fecha_nacimiento').val() + "\n";
        cartaText += "Edad: " + $('#edad').val() + "\n";
        cartaText += "Género: " + $('#genero').val() + "\n";
        cartaText += "Email: " + $('#email').val() + "\n";
        cartaText += "Celular: " + $('#celular').val() + "\n";
        cartaText += "Profesión: " + $('#profesion').val() + "\n";
        cartaText += "Motivación para postular: " + $('#motivacion').val() + "\n";
        $('#carta').val(cartaText);
    });
});
