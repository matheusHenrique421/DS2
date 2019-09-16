module.exports = app => {

    app.post('/tarefa01', (req,res) => {

        var cf = req.body.custofabrica;
        var pd = req.body.percdistri;
        var pi = req.body.percimposto;

        var custofinal = cf + ((cf/100) * pd) + ((cf/100) * pi);

        res.send({
            custofabrica: cf,
            percdistri: pd,
            percimposto: pi,
            custofinal: custofinal
        });
    });

}