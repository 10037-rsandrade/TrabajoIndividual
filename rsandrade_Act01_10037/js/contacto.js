function validarCampos() {
  var emailVerificar = document.getElementById("correoValidar");
  var expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
  var email = emailVerificar.value;

  if (expresion.test(email)) {
    alert("El correo electrónico es válido.");
  } else {
    alert("El correo electrónico no es válido.");
  }

  var telefonoValidar = document.getElementById("telefonoValidar");
  var telefono = telefonoValidar.value;

  if (telefono.length == 10 && !isNaN(telefono)) {
    alert("El número de teléfono es válido.");
    return true;
  } else {
    alert("El número de teléfono no es válido.");
  }
}


function desactivar(){
  document.getElementById("enviarContacto").disabled = true;
  document.getElementById("enviarContacto").value ="Enviando datos...";
  let valor = validarCampos();
  if(valor == true)
  document.getElementById("formContacto").submit();
}