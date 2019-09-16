const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

//Instancia a aplicação
const app = express();

//Adiciona o body-parser à aplicação para poder receber JSON no body da requisição
app.use( bodyParser.json() );

//Padrao
app.get('/', function(req, res){
    res.send('Its Working!');
});

consign()
    .include('routes')
    .into(app);

app.listen(3000);