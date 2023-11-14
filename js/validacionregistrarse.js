// Create an array to store users
const usuarios = [];

// Handle the form submission event
function SubmitEvent(event) {

  
    event.preventDefault();

    // Get the form data
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;

    // Create a new user object
    const newUser = {
        nombre: nombre,
        email: email,
        pass: pass
    };

    // Add the new user to the array
    usuarios.push(newUser);

    // Submit the form data to the server
    // ...
}
