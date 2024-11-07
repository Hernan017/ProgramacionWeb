const inicializarFormulario = () => {
    
    const nombreInput = document.getElementById('nombre');
    const ocupacionInput = document.getElementById('ocupacion');
    const colorInput = document.getElementById('color');
    const botonGuardar = document.getElementById('guardar');
    
    botonGuardar.addEventListener('click', () => {
        //Obtengo los vlaores de los input
        crearTarjeta(nombreInput.value, ocupacionInput.value, colorInput.value);
        nombreInput.value = '';
        ocupacionInput.value = '';
    });
};

const crearTarjeta = (nombre, ocupacion, color) => {
    const tarjetasDiv = document.getElementById('tarjetas');
    
    const tarjeta = document.createElement('div');
    tarjeta.className = 'tarjeta';
    tarjeta.style.backgroundColor = color;
    
    //Intento de html en js :D, ya si no jala ni moño 
    tarjeta.innerHTML = `
        <h2>${nombre}</h2>
        <p>${ocupacion}</p>
        <button class="eliminar">Eliminar</button>
    `;

    tarjetasDiv.appendChild(tarjeta);
    
    const botonEliminar = tarjeta.querySelector('.eliminar');
    botonEliminar.addEventListener('click', () => {
        tarjetasDiv.removeChild(tarjeta);
    });
};

document.addEventListener('DOMContentLoaded', inicializarFormulario);