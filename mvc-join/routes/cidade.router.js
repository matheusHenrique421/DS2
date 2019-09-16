const express = require('express');
const cidadeController = require('../controller/cidade.controller');

const routes = express.Router();

routes.get('/', cidadeController.find);
routes.post('/', cidadeController.create);

routes.get('/:id([0-9]+)', cidadeController.findById);
routes.put('/:id([0-9]+)', cidadeController.update);
routes.delete('/:id([0-9]+)', cidadeController.delete);

module.exports = routes;