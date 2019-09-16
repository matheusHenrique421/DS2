  
 const express = require('express');
 const personController = require('../controller/person.controller');
 
 const routes = express.Router();
 
 routes.get('/', personController.find);
 routes.post('/', personController.create);
 
 routes.get('/:id([0-9]+)', personController.findById);
 routes.put('/:id([0-9]+)', personController.update);
 routes.delete('/:id([0-9]+)', personController.delete);
 
 module.exports = routes;