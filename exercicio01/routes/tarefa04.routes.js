module.exports = (app) => {

    app.get('/tarefa04', (req, res) => {


        var valor = req.query.valor;
        var resultado = (valor >= 0)  ? 'POSITIVO' : 'NEGATIVO';
        res.send(`O numero ${valor}, enviado por parametro, e ${resultado}.`)



    });
}