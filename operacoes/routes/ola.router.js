module.exports = app => {

    app.get('/ola', (req, res) => {

        var param1 = req.query.nome;
        var param2 = req.query.sobrenome;
    
        //res.send('Olá '+ param1 +' '+ param2);
        res.send(`Olá ${param1} ${param2}`);
    
    });

}