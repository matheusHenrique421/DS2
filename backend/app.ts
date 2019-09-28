import * as express from 'express';
import bodyParser = require('body-parser');
import * as cors from 'cors';
import estadoRouter from './src/router/estado.router';


class App {

    public express: express.Application;

    constructor() {
        this.express = express();
        this.middleware();
        this.router();
    }

    // CARREGA OS MIDDLEARE DA APLICACAO
    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(cors());
    }

    private router(): void {
        this.express.use('/estados', estadoRouter);

    }

}
export default new App().express;
