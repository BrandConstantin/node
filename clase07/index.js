var server = require('./server');
var router = require('./router');
var requestHandler = require('./requestHandler');

var handler = {}
handler["/"] = requestHandler.inicio;
handler["/inicio"] = requestHandler.inicio;
handler["/contacto"] = requestHandler.contacto;
handler["/error404"] = requestHandler.error404;

/*
var handler = {
    '/': requestHandler.inicio,
    '/inicio': requestHandler.inicio,
    '/contacto': requestHandler.contacto,
    '/error404': requestHandler.error404
}
*/

server.iniciar(router.route, handler);