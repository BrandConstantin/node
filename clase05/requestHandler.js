function inicio() {
  console.log("Manipulador de petición 'inicio' ha sido llamado.");
}

function cantacto() {
  console.log("Manipulador de petición 'contacto' ha sido llamado.");
}

function error404() {
  console.log("Recurso no encontrado");
}

exports.inicio = inicio;
exports.cantacto = cantacto;
exports.error404 = error404;