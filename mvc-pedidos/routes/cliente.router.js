const express = require('express');
const clienteController = require('../controller/cliente.controller');

const routes = express.Router();

routes.get('/', clienteController.find);

routes.post('/', clienteController.create);

routes.get('/:id([0-9]+)', clienteController.findByID);
routes.put('/:id([0-9]+)', clienteController.update);
routes.delete('/:id([0-9]+)', clienteController.delete);

module.exports = routes;
