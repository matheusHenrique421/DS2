module.exports = (app) => {

    app.get('/tarefa03', (req, res) => {

        /* OUTRA FORMA DE FAZER
        var valor = req.query;
        var par = (valor % 2) == 0;
        */

        var valor = req.query.valor;
        var resultado = (valor % 2) == 0 ? 'PAR' : 'IMPAR';
        res.send(`O numero ${valor}, enviado por parametro, e ${resultado}.`)


        /* OUTRA FORMA DE FAZER 
        if (par){
            res.send('PAR')
        }else {
            res.send('IMPAR')
        }
        */
    });
}