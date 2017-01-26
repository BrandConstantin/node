var http = require("http");
var url = require("url");

function iniciar(){
  function onRequest(request, response) {
    var rutaUrl = url.parse(request.url).pathname;
    console.log("Petición para " + rutaUrl + " recibida.");

    console.log("Peticion Recibida.");
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("Hola Mundo");
    response.write('<br>Programa dividido en dos ficheros');
    response.write('<p>Ruta ' + rutaUrl + 'ruta</p>');
    response.end();
  }

  http.createServer(onRequest).listen(8888);

  console.log("Servidor Iniciado.");
}

exports.iniciar = iniciar;