import usuarios from './validacionregistrarse.js';

// Obtener referencias a los elementos de entrada de correo electrónico y contraseña
const emailInput = document.querySelector('input[name="email"]');
const passwordInput = document.querySelector('input[name="pass"]');


// Agregar un controlador de eventos para el botón de inicio de sesión
const loginButton = document.querySelector('.login100-form-btn');
loginButton.addEventListener('click', validarInicioSesion);

function validarInicioSesion(event) {
  event.preventDefault();

  // Obtener los valores de correo electrónico y contraseña
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // Verificar que se haya ingresado un correo electrónico válido
  if (!validarEmail(email)) {
    alert('Por favor ingrese un correo electrónico válido.');
    return;
  }

  // Verificar que se haya ingresado una contraseña
  if (password === '') {
    alert('Por favor ingrese una contraseña.');
    return;
  }

  // Verificar que el correo electrónico y la contraseña coincidan con los de un usuario registrado
  const user = usuarios.find((user) => user.email === email && user.password === password);
  // Si se ha seleccionado la opción "Recordarme", almacenar el correo electrónico y la contraseña en las cookies del navegador
  const rememberMeCheckbox = document.querySelector('#ckb1');
  if (rememberMeCheckbox.checked) {
    document.cookie = `email=${email}; expires=${getCookieExpirationDate()}`;
    document.cookie = `password=${password}; expires=${getCookieExpirationDate()}`;
  }

  // Enviar el formulario de inicio de sesión
  document.querySelector('.login100-form').submit();
}

// Función para validar un correo electrónico
function validarEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Función para obtener la fecha de vencimiento de las cookies
function getCookieExpirationDate() {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 7); // Las cookies expiran en 7 días
  return expirationDate.toUTCString();
}
