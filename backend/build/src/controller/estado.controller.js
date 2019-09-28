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
const estado_entity_1 = require("../entity/estado.entity");
const typeorm_1 = require("typeorm");
class EstadoController {
    find(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const estados = yield typeorm_1.getRepository(estado_entity_1.EstadoEntity).find();
                res.send(estados);
            }
            catch (error) {
                res.status(500).send(error);
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const estado = req.body;
            try {
                yield typeorm_1.getRepository(estado_entity_1.EstadoEntity).save(estado);
                res.send(estado);
            }
            catch (error) {
                res.status(500).send(error);
            }
        });
    }
}
exports.default = new EstadoController();
//# sourceMappingURL=estado.controller.js.map