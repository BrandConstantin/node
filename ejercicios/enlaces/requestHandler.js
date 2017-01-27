let fs = require('fs');
//tambien se puede
// var fs = require('fs');

function index() {
  //console.log("Manipulador de petición 'inicio' ha sido llamado.");
  return fs.readFileSync('index.html', 'utf-8');
}

function contacto() {
  console.log("Manipulador de petición 'contacto' ha sido llamado.");
  return fs.readFileSync('contacto.html', 'utf-8');
}

function error404() {
  //console.log("Recurso no encontrado");
  return '404 Forbiten';
}

/*
function saluda(nombre){
  return 'Hola ' + nombre;
}
*/

function producto() {
  //console.log("Recurso no encontrado");
  return fs.readFileSync('producto.html', 'utf-8');
}

function politica() {
  //console.log("Recurso no encontrado");
  return fs.readFileSync('politica.html', 'utf-8');
}

exports.index = index;
exports.contacto = contacto;
exports.error404 = error404;
exports.producto = producto;
exports.politica = politica;