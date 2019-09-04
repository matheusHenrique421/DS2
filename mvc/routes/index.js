const express = require('express');
const personRoute = require('./person.router');
const stateRoutes = require('./state.router');

const routes = new express.Router();
routes.use('/persons', personRoute);
routes.use('/states', stateRoutes);
module.exports = routes;