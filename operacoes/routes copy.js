const express = require('express');
const routes = new express.Router();

routes.get('/ola', (req, res) => {

    var param1 = req.query.nome;
    var param2 = req.query.sobrenome;
    //res.send('Ola!'+ param1 + ' '+param2);
    res.send(`Ola ${param1} ${param2}`);

});
routes.get('/somar', (req, res) => {

    var param1 = Number(req.query.a);
    var param2 = Number(req.query.b);

    if (isNaN(param1) || isNaN(param2)) {
        res.send('Bad Request');
    } else {
        var resultado = param1 + param2;
        res.send(`Resultado = ${resultado}`)
    };

});
routes.get('/diminuir', (req, res) => {

    var param1 = Number(req.query.a);
    var param2 = Number(req.query.b);

    if (isNaN(param1) || isNaN(param2)) {
        res.send('Bad Request');
    } else {
        var resultado = param1 - param2;
        res.send(`Resultado = ${resultado}`)
    };


});
routes.get('/multiplicar', (req, res) => {

    var param1 = Number(req.query.a);
    var param2 = Number(req.query.b);

    if (isNaN(param1) || isNaN(param2)) {
        res.send('Bad Request');
    } else {
        var resultado = param1 * param2;
        res.send(`Resultado = ${resultado}`)
    };

});
routes.get('/dividir', (req, res) => {

    var param1 = Number(req.query.a);
    var param2 = Number(req.query.b);

    if (isNaN(param1) || isNaN(param2)) {

        res.send('Bad Request');
    } if (param2 == 0) {

        res.send(`Resto = Nao existe divisao por 0`)
    }
    if (param1 < param2) {

        var resultado = param1 % param2;
        res.send(`Resto = ${resultado}`)

    } else {
        var resultado = param1 / param2;
        res.send(`Resultado = ${resultado}`)
    };

});
routes.get('/regra3', (req, res) => {

    var param1 = Number(req.query.a);
    var param2 = Number(req.query.b);


    if (isNaN(param1) || isNaN(param2)) {

        res.send('Bad Request');
    } else {

        var resultado = (param2 * 100) / param1;

        res.send(`Resultado = ${resultado} %`);

    };



});




module.exports = routes; 
