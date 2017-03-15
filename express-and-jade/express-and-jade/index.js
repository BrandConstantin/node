var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'jade');

app.get('/', function(req, res) {
    res.render('index');
});

/*app.get('/index', function(req, res) {
    res.render('/index');
});*/

var direccion = {
    direccion: 'Marie Cueri, 10 - PTA, Campanillas, Málaga'
}

app.get('/contacto', function(req, res) {
    res.render('contacto', direccion);
});

var datos = {
    nombre: 'Aitor',
    apellido: 'Jahson',
}

app.get('/usuarios', function(req, res) {
    res.render('usuarios', datos);
});

app.get('/saluda/:nombre', function(req, res) {
    var persona = {
        'nombre': req.params.nombre
    };

    res.render('saluda', persona);
});

app.get('/formulario', function(req, res) {
    res.render('formulario');
});

app.post('/registro', function(req, res) {
    console.log(req.body.usuario);

    let datos = {
        'usuario': req.body.usuario,
        'contrasena': req.body.contrasena
    }

    res.render('registro', datos);
});

app.listen(8080);