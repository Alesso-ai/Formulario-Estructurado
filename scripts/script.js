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

  switch (true) {
    //Nombre como campo obligatorio = a 0 significa que esta vacio
    case nombre.value.trim().length == 0:
      mensajeError = mensajeError.concat("El campo nombre es obligatorio");
      break;

    //Nombre con caracteres validos
    case !/^[a-zA-Z0-9]*$/.exec(nombre.value.trim()):
      mensajeError = mensajeError.concat(
        "El campo nombre solo acepta caracteres validos"
      );
      break;

    //Correo electronico valido
    case !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.exec(
      correo.value.trim()
    ):
      mensajeError = mensajeError.concat(
        "El campo correo electronico no es valido"
      );
      break;

    //telefono
    case !/^[a-zA-Z0-9]\d{8}$/.exec(telefono.value.trim()):
      mensajeError = mensajeError.concat(
        "El campo telefono solo acepta caracteres validos"
      );
      break;

    //mensaje
    case mensaje.value.trim().length < 10:
      mensajeError = mensajeError.concat(
        "El campo mensaje debe tener al menos 10 caracteres"
      );
      break;
  }

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
