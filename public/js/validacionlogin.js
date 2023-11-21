//Importamos el arreglo de usuarios
//import { usuarios } from './validacionregistrarse.js';

//Función para validar el inicio de sesión
function validarCorreo() {
    var correoInput = document.getElementById('correoElectronico');
    var mensajeErrorCorreo = document.getElementById('mensajeErrorCorreo');

    // Expresión regular para validar el formato de correo electrónico
    var regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (correoInput.value.trim() === '') {
        // El campo está vacío, muestra un mensaje de error
        mensajeErrorCorreo.innerHTML = 'Por favor, ingrese su correo electrónico.';
        mensajeErrorCorreo.style.color = 'red';
        return false;
    } else if (!regexCorreo.test(correoInput.value)) {
        // El formato del correo electrónico no es válido, muestra un mensaje de error
        mensajeErrorCorreo.innerHTML = 'Por favor, ingrese un correo electrónico válido.';
        mensajeErrorCorreo.style.color = 'red';
        return false;
    } else {
        // La entrada es válida, borra el mensaje de error
        mensajeErrorCorreo.innerHTML = '';
        mensajeErrorCorreo.style.color = 'green';
        correoInput.classList.add('valido');
        correoInput.classList.remove('invalido');
        return true;
    }
}

function validarContraseña() {
    var contraseñaInput = document.getElementById('contraseña');
    var mensajeErrorContraseña = document.getElementById('mensajeErrorContraseña');

    // Expresión regular para validar el formato de correo electrónico
    var regex = /^[a-zA-Z0-9]{5,}$/;
}
