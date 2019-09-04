module.exports = (app) => {

    app.post('/json', (req, res) => {

        console.log( req.body );

        

        res.json({ result: req.body.mensagem });
    });

}