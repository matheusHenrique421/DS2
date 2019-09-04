module.exports = (app) => {

    app.post('/tarefa01', (req, res) => {


        var cf = req.body.custofabrica;
        var pd = req.body.percdistri;
        var pi = req.body.percimpost;

        var custofinal = cf + ((cf / 100) * pd) + ((cf / 100) + pi);
      
        res.send({
            custofabrica: cf,
            percdistri: pd,
            percimpost: pi,
            custofinal: custofinal

        });

        //OUTRA FORMA DE FAZER
         //res.send(`
        //- Custo de Fábrica: R$ ${cf} \n
        //- Distribuidor : ${pd} % \n
        //- Impostos : ${pi} % \n
        //- Custo Final : R$ ${custofinal}`);

    });
}