const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');

//Criar aplicação express
const app = express();

//Adiciona o body parser na aplicação
app.use( bodyParser.json() );

//Adiciona o arquivo de mapeamento de rota
app.use( routes );

const appServer = app.listen(3000, () => {
    console.log('Applicação está rodando na porta %s', appServer.address().port);
});