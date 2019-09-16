const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const connection = require('./mysql-connection');

//Criar aplicação express
const app = express();

//Adiciona o body parser na aplicação
app.use(bodyParser.json());

//Adiciona o arquivo de mapeamento de rota
app.use(routes);

//Tenta conectar com o banco de dados
connection.connect((error) => {
    if (error) {
        console.error('Deu pau: %s', error.message);
        return;
    }

    const appServer = app.listen(3000, () => {
        console.log('Applicação está rodando na porta %s', appServer.address().port);
    });
});