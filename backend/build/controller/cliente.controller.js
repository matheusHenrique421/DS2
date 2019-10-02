"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cliente_entity_1 = require("./../entity/cliente.entity");
const typeorm_1 = require("typeorm");
class ClienteController {
    find(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const estados = yield typeorm_1.getRepository(cliente_entity_1.ClienteEntity).find();
                res.send(estados);
            }
            catch (error) {
                res.status(500).send(error);
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cliente = req.body;
            try {
                yield typeorm_1.getRepository(cliente_entity_1.ClienteEntity).save(cliente);
                res.send(cliente);
            }
            catch (error) {
                res.status(500).send(error);
            }
        });
    }
}
exports.default = new ClienteController();
//# sourceMappingURL=cliente.controller.js.map