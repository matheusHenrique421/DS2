"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const htpp = require("http");
const app_1 = require("./app");
typeorm_1.createConnection().then(Connection => {
    const server = htpp.createServer(app_1.default);
    server.listen(3000, () => {
        console.log('Aplicação está rodando na porta 3000');
    });
}).catch(error => {
    console.log('typeORM dont connected %s', error);
});
//# sourceMappingURL=index.js.map