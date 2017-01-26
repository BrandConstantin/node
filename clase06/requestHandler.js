function inicio() {
  console.log("Manipulador de petición 'inicio' ha sido llamado.");
  return 'Pagina de inicio';
}

function contacto() {
  console.log("Manipulador de petición 'contacto' ha sido llamado.");
  return 'Marie Curie 10 PTA Campanillas Malaga';
}

function error404() {
  console.log("Recurso no encontrado");
  return '404 Forbiten';
}

exports.inicio = inicio;
exports.contacto = contacto;
exports.error404 = error404;