document.title = "Iniciar Sesion";
//---------------------------------------------------

//Crear el contenedor principal para el formulario
const container = document.createElement('div');
container.style.margin = '20px';

//crear titulo
const title = document.createElement('h2');
title.textContent = 'Inciar sesion';
container.appendChild(title);

// Crear el formulario
const form = document.createElement('form');

// crear campo de nombre de usuario
const usernamelabel = document.createElement('label');
usernamelabel.textContent = "Nombre de usuari@";
const usernameInput = document.createElement('input');
usernameInput.type = 'text';
usernameInput.required = true;
form.appendChild(usernamelabel);
form.appendChild(usernameInput);

const userpasswordlabel = document.createElement('label');
userpasswordlabel.textContent = "Contraseña: ";
const userpasswordInput = document.createElement('input');
userpasswordInput.type = 'password';
userpasswordInput.required = true;
form.appendChild(userpasswordlabel);
form.appendChild(userpasswordInput);

const enviarBoton = document.createElement('button');
enviarBoton.textContent = "Iniciar Sesion";
form.appendChild(enviarBoton);


//Mensaje de respuesta
const mensaje = document.createElement('p');
container.appendChild(form);
container.appendChild(mensaje);

//Agregar el contenedor al cuerpo del documento
document.body.appendChild(container);

//datos de inicio de sesion redefinida
const validarUser = 'Pancho';
const validaPassword = '1234';

//validar el user y pass
form.addEventListener('submit',(event) => {
    event.preventDefault();

    //validar el nombre y el pass
    if (usernameInput.value === validarUser && userpasswordInput.value === validaPassword) {
        mensaje.textContent = '👻 BIENVENIDO PANA 👻';
        mensaje.style.color = 'purple';
    }else{
        mensaje.textContent = ' 👿 NOMBRE DE USUARIO O PASSWORD INCONRRECTO 👿';
        mensaje.style.color = 'red';
    }

    //limpiar los imput
    usernameInput.value = '';
    userpasswordInput.value = '';

});