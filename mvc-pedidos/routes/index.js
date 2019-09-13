const express = require('express');
const clienteRoute = require('./cliente.router');
const vendedorRoute = require('./vendedor.router');
const produtoRoute = require('./produto.router');
const pedidoRoute = require('./pedido.router');

const routes = new express.Router();

routes.use('/clientes', clienteRoute);
routes.use('/vendedores', vendedorRoute);
routes.use('/produtos', produtoRoute);
routes.use('/pedidos', pedidoRoute);

module.exports = routes;