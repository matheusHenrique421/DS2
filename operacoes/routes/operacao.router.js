module.exports = (app) => {

    app.get('/operacao/:tipooperacao', (req, res) => {

        var tipo = req.params.tipooperacao;

        var param1 = Number(req.query.a);
        var param2 = Number(req.query.b);

        var resultado = 0;

        switch (tipo) {
            case 'somar':
                resultado = param1 + param2;
                break;

            case 'subtrair':
                resultado = param1 - param2;
                break;

            case 'dividir':
                resultado = param1 / param2;
                break;

            case 'multiplicar':
                resultado = param1 * param2;
                break;

            case 'regra de tres':
                resultado = param1 * param2;
                break;



            default:
                res.status(404).send('Operação Inválida');
        }





        console.log(param1);
        console.log(param2);


        res.send('->' + resultado);

    });



}
