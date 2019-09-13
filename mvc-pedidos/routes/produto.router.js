const express = require('express');
const produtoController = require('../controller/produto.controller');

const routes = express.Router();

routes.get('/', produtoController.find);
routes.post('/', produtoController.create);

routes.get('/:id([0-9]+)', produtoController.findById);
routes.put('/:id([0-9]+)', produtoController.update);
routes.delete('/:id([0-9]+)', produtoController.delete);

module.exports = routes;