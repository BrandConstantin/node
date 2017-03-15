var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static('client'));

/*
app.get('/', function(req, res) {
    res.status(200).send('Hola mundo');
});
*/
app.get('/hola-mundo', (req, res) => res.status(200).send('Hola mundo'));
/*
var message = [{
    id: 1,
    text: 'Bienvenido a Future Chat',
    nickname: 'Costinho'
}]*/

io.on('connection', (socket) => { //con socket se recoje info de los usuarios que se conectan
    console.log('El nodo ip conectado es: ' + socket.handshake.address);
    socket.emit('message', message);

    socket.on('add-message', message => {
        message.push(message)
        io.sockets.emit('message', message);
    });
});

/*
server.listen(6677, function() {
    console.log('Servidor funcionando en http://localhost:6677');
});
*/
//cuando la función no tiene paràmetros se puede hacer de este modo
server.listen(6677, () => console.log('Servidor funcionando en http://localhost:6677'));