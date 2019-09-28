const express = require('express');
const provaController = require('../controller/prova.controller');

const routes = express.Router();

routes.get('/', provaController.find);
routes.post('/', provaController.create);

routes.get('/:id([0-9]+)', provaController.findById);
routes.put('/:id([0-9]+)', provaController.update);
routes.delete('/:id([0-9]+)', provaController.delete);

module.exports = routes;