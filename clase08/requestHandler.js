let fs = require('fs');
//tambien se puede
// var fs = require('fs');

function inicio() {
  console.log("Manipulador de petición 'inicio' ha sido llamado.");
  return fs.readFileSync('index.html', 'utf-8');
}

function contacto() {
  console.log("Manipulador de petición 'contacto' ha sido llamado.");
  return 'Marie Curie 10 PTA Campanillas Malaga';
}

function error404() {
  console.log("Recurso no encontrado");
  return '404 Forbiten';
}

function saluda(nombre){
  return 'Hola ' + nombre;
}

exports.inicio = inicio;
exports.contacto = contacto;
exports.error404 = error404;
exports.saluda = saluda;