function agregarColor() {
    var nuevoColorInput = document.getElementById('nuevoColor');
    var nuevoColor = nuevoColorInput.value;
    var tablaColoresBody = document.getElementById('tablaColoresBody');

    // Validar que el campo de color no esté vacío
    if (nuevoColor.trim() === '') {
      nuevoColorInput.classList.add('incompleto');
      return; // Detener la función si el campo no está completo
    } else {
      nuevoColorInput.classList.remove('incompleto');
      nuevoColorInput.classList.add('completo');
    }

    // Crea un nuevo elemento div para representar el color
    var nuevoColorDiv = document.createElement('div');
    nuevoColorDiv.className = 'color-container';

    // Crea una caja de color
    var colorBox = document.createElement('div');
    colorBox.style.backgroundColor = nuevoColor;
    colorBox.className = 'color-box';

    // Muestra el código de color al lado del color
    var colorCode = document.createElement('span');
    colorCode.textContent = nuevoColor;

    // Crea un botón para eliminar el color
    var eliminarBtn = document.createElement('button');
    eliminarBtn.textContent = 'Eliminar';
    eliminarBtn.className = 'eliminar-btn';
    eliminarBtn.onclick = function() {
      // Eliminar el color al hacer clic en el botón
      tablaColoresBody.removeChild(nuevoColorDiv);

      // Ajusta la altura máxima del contenedor
      var contenedor = document.querySelector('.gridAggPedido');
      contenedor.style.maxHeight = (contenedor.scrollHeight - 30) + 'px';
    };

    // Agrega elementos al contenedor del color
    nuevoColorDiv.appendChild(colorBox);
    nuevoColorDiv.appendChild(colorCode);
    nuevoColorDiv.appendChild(eliminarBtn);

    // Agrega el nuevo color al contenedor
    tablaColoresBody.appendChild(nuevoColorDiv);

    // Ajusta la altura máxima del contenedor para acomodar el nuevo color
    var contenedor = document.querySelector('.gridAggPedido');
    contenedor.style.maxHeight = (contenedor.scrollHeight + 30) + 'px'; // Ajusta según sea necesario
  }
