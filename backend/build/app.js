"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// ROTAS
const cidade_router_1 = require("./router/cidade.router");
const estado_router_1 = require("./router/estado.router");
const cliente_router_1 = require("./router/cliente.router");
class App {
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }
    //Carrega os middleware da aplicação
    middleware() {
        this.express.use(bodyParser.json());
        this.express.use(cors());
    }
    routes() {
        this.express.use('/estados', estado_router_1.default);
        this.express.use('/cidades', cidade_router_1.default);
        this.express.use('/cliente', cliente_router_1.default);
    }
}
exports.default = new App().express;
//# sourceMappingURL=app.js.map