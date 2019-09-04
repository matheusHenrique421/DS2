const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');

// CRIAR APLICAÇÃO EXPRESS 
const app = express();

// ADICIONA O BODY PARSER NA APLICAÇÃO 
app.use(bodyParser.json());

// ADICIONA O ARQUIVO DE MAPEAMENTO DE TOA 
app.use(routes);


const appServer = app.listen(3000, () => {

    console.log('Applicação está rodando na porta %s',appServer.address().port);

});