var http = require("http");
var url = require("url");
//parsear la linea de los parámetros
var querystring = require('querystring');

function iniciar(route, handler){
  function onRequest(request, response) {
    var rutaUrl = url.parse(request.url).pathname;

    //parte la url a partir de ?
    var cadenaDatos = request.url.split('?')[1];
    //se puede hacer de este modo también
    //var urlEnArray = request.url.split('?');
    //var cadenaDatos = urlEnArray[1];
    var nombre = querystring.parse(cadenaDatos)['nombre'];

    console.log("Petición para " + rutaUrl + " recibida.");
    console.log("Peticion Recibida.");

    var contenido = route(rutaUrl, handler, nombre);
    
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(contenido);
    response.end();
  }

  http.createServer(onRequest).listen(8888);

  console.log("Servidor Iniciado en http://localhost:8888");
}

exports.iniciar = iniciar;