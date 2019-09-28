const express = require('express');
const tabelaprecoRoute = require('./tabelapreco.router');
const cidadeRoute = require('./prova.router');

const routes = new express.Router();

routes.use('/tabelapreco', tabelaprecoRoute);
routes.use('/prova', cidadeRoute);

module.exports = routes;