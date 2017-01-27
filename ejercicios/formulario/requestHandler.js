let fs = require('fs');
//tambien se puede
// var fs = require('fs');

function inicio() {
  console.log("Manipulador de petición 'inicio' ha sido llamado.");
  return fs.readFileSync('index.html', 'utf-8');
}

function error404() {
  console.log("Recurso no encontrado");
  return '404 Forbiten';
}

function resultado(numero){
  var media = parseInt(numero[0] + numero[1] + numero[2]) / 3;
  return fs.readFileSync('resultado.html', 'utf-8');
}

exports.inicio = inicio;
exports.error404 = error404;
exports.resultado = resultado;