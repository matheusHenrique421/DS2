const express = require('express');
const routes = new express.Router();



routes.get('/operacao/:tipooperacao', (req, res) => {

    var tipo = req.params.tipooperacao;

    var param1 = Number(req.query.a);
    var param2 = Number(req.query.b);

    var resultado = 0;

    switch (tipo){
        case 'somar':
            resultado = param1 + param2;
            break;
            
            case 'subtrair':
            resultado = param1 - param2;
            break;

        default:
            res.status(404).send('Operação Inválida');
    }



    if (tipo == 'somar'){
        resultado = param1 + param2;
    } else if (tipo == 'subtrair'){
        resultado = param1 - param2;
    }


    console.log (param1);
    console.log (param2);


    res.send('->' + resultado);

});




// Somar 
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
