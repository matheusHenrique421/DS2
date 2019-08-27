const respository = require('../repository/cidade.repository');


module.exports = {
    find: (req, res) => {

        respository.find((error, result) => {
            if (error) {
                res.status(500).send(error)
            }

            const cidade = [];

            for (item of result) {

                // CONVERTE DE RELACIONAL PARA OBJETO

                let cidade = {
                    id: item.cidade_id,
                    nome: item.cidade_nome,
                    estado: {
                        id: item.estado_id,
                        nome: item.estado_nome,
                        sigla: item.estado_sigla
                    }
                }
                cidade.push(cidade);
            }

            res.send(cidade);
        });
    },

    create: (req, res) => {
        // CONVERTE DE OBJETO PARA RELACIONAL
        const cidade = {
            nome: req.body.nome,
            estado_id: req.body.estado.id
        }

        respository.create(cidade, (error, result) => {
            if (error) {
                res.status(500).send(error);
            }
            res.send(result);
        });
    },

    findByID: (req, res) => {
        respository.findById(req.params, (error, result) => {
            if (error) {
                res.status(500).send(error);
            }
            // VALIDA SE O EXISTE NO BANCO
            if (!result[0]) {
                res.status(404).send('not found');
            }
            res.send(result[0]);
        });
    },

    update: (req, res) => {
        // ATULIZA O ID DO OBJETO DO REQ.BODY
        req.body.id = req.body.params.id;

        respository.update(req.body, (error, result) => {
            if (error) {
                res.status(500).send(error);
            }
            if (result.affectedRows == 0) {
                res.result(404).send('Not Found');
            }
            res.send(result);
        });

    },

    delete: (req, res) => {
        respository.delete(req.params, (error, result) => {
            if (error) {
                res.status(500).send(error);
            }
            res.status(204)(result[0]);
        });
    }
}