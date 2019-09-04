module.exports = (app) => {

    app.post('/tarefa02', (req, res) => {

// outra forma de pegar variavel 

        var {salario, percreajuste} = req.body.body;
        var newsal = salario * (1+ (percreajuste))

        var salareajust = cf + ((cf / 100) * pd) + ((cf / 100) + pi);

    });
}