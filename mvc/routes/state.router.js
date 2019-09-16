const express = require('express');
const stateController = require('../controller/state.controller');

const routes = express.Router();

routes.get('/', stateController.find);
routes.post('/', stateController.create);

routes.get('/:id([0-9]+)', stateController.findById);
routes.put('/:id([0-9]+)', stateController.update);
routes.delete('/:id([0-9]+)', stateController.delete);

module.exports = routes;