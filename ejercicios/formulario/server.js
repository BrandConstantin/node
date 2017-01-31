var http = require("http");
var url = require("url");
//parsear la linea de los parámetros
var querystring = require('querystring');

function iniciar(route, handler) {
    function onRequest(request, response) {
        var rutaUrl = url.parse(request.url).pathname;

        //parte la url a partir de ?
        var resultado = url.parse(request.url).split('?')[1];
        //se puede hacer de este modo también
        //var urlEnArray = request.url.split('?');
        //var resultado = urlEnArray[1];
        //console.log(resultado);
        var a = parseInt(querystring.parse(resultado)['a']);
        var b = parseInt(querystring.parse(resultado)['b']);
        var c = parseInt(querystring.parse(resultado)['c']);

        var numeros = [a, b, c];
        console.log(numeros);

        console.log("Petición para " + rutaUrl + " recibida.");
        console.log("Peticion Recibida.");

        var contenido = route(rutaUrl, handler, resultado);

        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(contenido);
        response.end();
    }

    http.createServer(onRequest).listen(8888);

    console.log("Servidor Iniciado en http://localhost:8888");
}

exports.iniciar = iniciar;