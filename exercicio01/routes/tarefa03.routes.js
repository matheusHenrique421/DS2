module.exports = app => {

    app.get('/tarefa03', (req,res) => {

        var valor = req.query.valor;

        var resultado = (valor % 2) == 0 ? 'PAR' : 'IMPAR';

        res.send(`O número ${valor}, enviado por parâmetro, é ${resultado}.`)
        
    });

}