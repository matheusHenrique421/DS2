import { Router } from 'express';
import  VendedorController  from '../controller/vendedor.controller';

class VendedorRouter {

    public router: Router;

    constructor() {
        this.router = Router();

        this.init();
    }

    private init() {
        this.router.get('/', VendedorController.find);
        this.router.post('/', VendedorController.create);

        this.router.get('/:id([0-9]+)', VendedorController.findById);
        this.router.put('/:id([0-9]+)', VendedorController.update);
        this.router.delete('/:id([0-9]+)', VendedorController.delete);
    }

}

export default new VendedorRouter().router;