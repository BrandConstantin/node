let fs = require('fs');
//tambien se puede
// var fs = require('fs');

function inicio() {
    console.log("Manipulador de petición 'inicio' ha sido llamado.");
    let archivo = fs.readFileSync('index.html', 'utf-8');
    return archivo;
}

function error404() {
    console.log("Recurso no encontrado");
    return '404 Forbiten';
}

function media(numeros) {
    console.log(numeros);
    var media = (numeros[0] + numeros[1] + numeros[2]) / 3;
    console.log('Media ' + media);
    return 'Media: ' + media;
}

exports.inicio = inicio;
exports.error404 = error404;
exports.media = media;