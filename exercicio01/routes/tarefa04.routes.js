module.exports = app => {

    app.get('/tarefa04', (req,res) => {

        var {valor} = req.query;

        var resultado = valor >= 0 ? 'POSITIVO' : 'NEGATIVO';

        res.send(`O número ${valor}, enviado por parâmetro, é ${resultado}.`)
        
    });

}