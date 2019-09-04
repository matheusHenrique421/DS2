const express = require('express');
const estadoRoute = require('./estado.router');
const cidadeRoute = require('./cidade.router');

const routes = new express.Router();

routes.use('/estados', estadoRoute);
routes.use('/cidades', cidadeRoute);

module.exports = routes;