const express = require('express');
const estadoController = require('../controller/estado.controller');

const routes = express.Router();

routes.get('/', estadoController.find);
routes.post('/', estadoController.create);

routes.get('/:id([0-9]+)', estadoController.findById);
routes.put('/:id([0-9]+)', estadoController.update);
routes.delete('/:id([0-9]+)', estadoController.delete);

module.exports = routes;