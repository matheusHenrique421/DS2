import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

//Rotas
import estadoRouter from './router/estado.router';
import cidadeRouter from './router/cidade.router';
import clienteRouter from './router/cliente.router';

class App {
    public express: express.Application;

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }

    //Carrega os middleware da aplicação
    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(cors());
    }

    private routes(): void {
        this.express.use('/estados', estadoRouter);
        this.express.use('/cidades', cidadeRouter);
        this.express.use('/clientes', clienteRouter);
    }
}

export default new App().express;