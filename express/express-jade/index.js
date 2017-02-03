var express = require('express');
var app = express();

app.set('view engine', 'jade');

app.get('/', function(req, res) {
    res.render('index');
});

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

app.get('/registro', function(req, res) {
    let datos = {}
    res.render('registro', datos);
});

app.listen(8080);