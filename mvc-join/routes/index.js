const express = require('express');
const estadoRoute = require('./estado.router');
const stateRoutes = require('./cidade.router');

const routes = new express.Router();
routes.use('/estado', estadoRoute);
routes.use('/cidade', stateRoutes);
module.exports = routes;