const express = require('express');
const tabelaprecoController = require('../controller/tabelapreco.controller');

const routes = express.Router();

routes.get('/', tabelaprecoController.find);
routes.post('/', tabelaprecoController.create);

routes.get('/:id([0-9]+)', tabelaprecoController.findById);
routes.put('/:id([0-9]+)', tabelaprecoController.update);
routes.delete('/:id([0-9]+)', tabelaprecoController.delete);

module.exports = routes;