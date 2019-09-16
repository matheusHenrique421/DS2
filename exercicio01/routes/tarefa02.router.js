module.exports = app => {

    app.post('/tarefa02', (req,res) => {

        var {salario, percreaju} = req.body;

        var newsal = salario * (1+ (percreaju/100))

        res.send({
            salario: salario,
            percentual: percreaju,
            novosalario: newsal
        })
    });

}