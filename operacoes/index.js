const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

// function pode ser substuido por =>

//Instancia a aplicaçao 
const app = express();

//Adiciona o body-parser a  aplicacao para poder receber JSON no body da requisição
app.use(bodyParser.json());

// padrao
app.get('/', (req, res) => {
    res.send('Give me a bottle of rum!');
});


consign()
    .include('routes')
    .into(app);

app.listen(3000);