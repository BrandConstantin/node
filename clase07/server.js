var http = require("http");
var url = require("url");

function iniciar(route, handler){
  function onRequest(request, response) {
    var rutaUrl = url.parse(request.url).pathname;
    console.log("Petición para " + rutaUrl + " recibida.");
    console.log("Peticion Recibida.");

    var contenido = route(rutaUrl, handler);
    
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(contenido);
    response.end();
  }

  http.createServer(onRequest).listen(8888);

  console.log("Servidor Iniciado en http://localhost:8888");
}

exports.iniciar = iniciar;