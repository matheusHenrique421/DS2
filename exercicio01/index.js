const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

//Instancia a aplicaçao 
const app = express();

//Adiciona o body-parser a  aplicacao para poder receber JSON no body da requisição
app.use(bodyParser.json());

consign()
    .include('routes')
    .into(app);

app.listen(3000);