"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tabelapreco_controller_1 = require("../controller/tabelapreco.controller");
class tabelaPrecoRouter {
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    init() {
        this.router.get('/', tabelapreco_controller_1.default.find);
        this.router.post('/', tabelapreco_controller_1.default.create);
        this.router.get('/:id([0-9]+)', tabelapreco_controller_1.default.findById);
        this.router.put('/:id([0-9]+)', tabelapreco_controller_1.default.update);
        this.router.delete('/:id([0-9]+)', tabelapreco_controller_1.default.delete);
    }
}
exports.default = new tabelaPrecoRouter().router;
//# sourceMappingURL=tabelapreco.router.js.map