"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cliente_controller_1 = require("../controller/cliente.controller");
class ClienteRouter {
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    init() {
        this.router.get('/', cliente_controller_1.default.find);
        this.router.post('/', cliente_controller_1.default.create);
    }
}
exports.default = new ClienteRouter().router;
//# sourceMappingURL=cliente.router.js.map