var server = require('./server');
var router = require('./router');
var requestHandler = require('./requestHandler');

var handler = {}
handler["/"] = requestHandler.index;
handler["/index"] = requestHandler.index;
handler["/contacto"] = requestHandler.contacto;
handler["/error404"] = requestHandler.error404;
handler["/producto"] = requestHandler.producto;
handler["/politica"] = requestHandler.politica;

/*
var handler = {
    '/': requestHandler.inicio,
    '/inicio': requestHandler.inicio,
    '/contacto': requestHandler.contacto,
    '/error404': requestHandler.error404
}
*/

server.iniciar(router.route, handler);