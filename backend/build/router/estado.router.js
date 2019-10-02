"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const estado_controller_1 = require("../controller/estado.controller");
class EstadoRouter {
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    init() {
        this.router.get('/', estado_controller_1.default.find);
        this.router.post('/', estado_controller_1.default.create);
    }
}
exports.default = new EstadoRouter().router;
//# sourceMappingURL=estado.router.js.map