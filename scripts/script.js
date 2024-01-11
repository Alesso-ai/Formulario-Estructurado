const formulario = document.querySelector("#formulario");
const nombre = document.querySelector("#nombre");
const correo = document.querySelector("#correo");
const telefono = document.querySelector("#telefono");
const mensaje = document.querySelector("#mensaje");
const enviar = document.querySelector("#enviar");
const errores = document.querySelector("#errores");

let mensajeError = [];

const validar = (e) => {
  //1 Evitar que se envie el formulario
  e.preventDefault(e);

  //2 Vaciar el array de elementos
  mensajeError = [];

  //3 Validar los campos del formulario
  //true para que el flujo de la interpretacion entre el formulario

  //Nombre como campo obligatorio = a 0 significa que esta vacio
  nombre.value.trim().length == 0 &&
    mensajeError.push("El campo nombre es obligatorio");

  //Nombre con caracteres validos
  !/^[a-zA-Z0-9]*$/.test(nombre.value.trim()) &&
    mensajeError.push("El campo nombre solo acepta caracteres validos");
  //Correo electronico valido
  !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.exec(
    correo.value.trim()
  ) && mensajeError.push("El campo correo electronico no es valido");

  //telefono
  !/^[a-zA-Z0-9]\d{8}$/.test(telefono.value.trim()) &&
    mensajeError.push("El campo telefono solo acepta caracteres validos");
  //mensaje
  mensaje.value.trim().length < 10 &&
    mensajeError.push("El campo mensaje debe tener al menos 10 caracteres");

  //Enviar o mostrar mensaje
  if (
    mensajeError.length === 0 &&
    confirm("¿Esta seguro de enviar el formulario?")
  ) {
    //Se envia el formulario
    formulario.submit();
  } else if (mensajeError.length > 0) {
    //Mostrar mensaje de error
    errores.textContent = "";

    mensajeError.forEach(function (mensaje) {
      const mili = document.createElement("li");
      mili.textContent = mensaje;
      errores.appendChild(mili);
    });
  }
};

formulario.addEventListener("submit", validar);
