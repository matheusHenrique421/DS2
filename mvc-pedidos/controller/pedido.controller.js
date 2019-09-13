const repository = require('../repository/pedido.repository');
const moment = require('moment');

module.exports = {
    find :(req,res) => {

        repository.find((error, result) => {
            if (error) {
                res.status(500).send(error);
            }

            const pedidos = [];

            for (item of result) {

                let pedido = {
                    id: item.p_id,
                    codigo: item.p_codigo,
                    dtpedido: moment(item.dtpedido).format('YYYY-MM-DD'),
                    observacao: item.observacao,
                    cliente: {
                        id: item.c_id,
                        codigo: item.c_codigo,
                        nome: item.c_nome,
                        email: item.c_email
                    },
                    vendedor: {
                        id: item.v_id,
                        codigo: item.v_codigo,
                        nome: item.v_nome,
                        email: item.v_email
                    },
                    itens: item.itens 
                }

                pedidos.push( pedido );
            }

            res.send(pedidos);
        });

    },
    create: (req,res) => { 
        
        repository.create(req.body, (error, result) => {
            if (error) {
                res.status(500).send(error);
            }

            res.send(result);
        });
    },
    findById: (req,res) => {
        
        repository.findById(req.params, (error, result) => {
            if (error) {
                res.status(500).send(error);
            }

            //Valida se o id existe no banco
            if (! result[0]) {
                res.status(404).send('not found');
            }

            res.send(result[0]);
        });
    },
    update: (req,res) => {
        //Atualizar o id do objeto do req.body
        req.body.id = req.params.id;
        
        repository.update(req.body, (error, result) => {
            if (error) {
                res.status(500).send(error);
            }

            if (result.affectedRows == 0) {
                res.status(404).send('not found');
            }
            
            res.send(result);
        });
    },
    delete: (req,res) => {
        repository.delete(req.params, (error, result) => {
            if (error) {
                res.status(500).send(error);
            }

            res.status(204).send();
        });
    }
}