import { Router } from 'express';
import  clienteController  from '../controller/cliente.controller';

class ClienteRouter {

    public router: Router;

    constructor() {
        this.router = Router();

        this.init();
    }

    private init() {
        this.router.get('/', clienteController.find);
        this.router.post('/', clienteController.create);
    }

}

export default new ClienteRouter().router;