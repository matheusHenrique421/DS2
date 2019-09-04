const express = require('express');
const vendedorController = require('../controller/vendedor.controller');

const routes = express.Router();

routes.get('/', vendedorController.find);
routes.post('/', vendedorController.create);

routes.get('/:id([0-9]+)', vendedorController.findByID);
routes.put('/:id([0-9]+)', vendedorController.update);
routes.delete('/:id([0-9]+)', vendedorController.delete);

module.exports = routes;
