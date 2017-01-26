var http = require("http"); //cargar una de la muchas librerias de node, esta vez el http

http.createServer(function(request, response) { //una vez cargada la libreria, crea un servidor
  response.writeHead(200, {"Content-Type": "text/html"}); //200 es todo ok, código de estado http
  response.write("Hola Mundo");
  response.write("<p>Aprendiendo <b>node</b></p>");
  response.end();
}).listen(8888); //puerto de escuchea 8888

//también se puede hacer de este modo
/*
var http = require("http");

function onRequest(request, response) {
  console.log("Peticion Recibida.");
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Hola Mundo");
  response.end();
}

http.createServer(onRequest).listen(8888);

console.log("Servidor Iniciado.");
*/