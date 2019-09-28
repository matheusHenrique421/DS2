const repository = require('../repository/cliente.repository');

module.exports = {
    find: (req, res) => {

        repository.find((error, result) => {
            if (error) {
                res.status(500).send(error);
            }
            const clientes [];
            for (item of result) {
                let cliente = {
                    id:
                        codigo:
                    nome:
                        email:
                    cidade: {
                        id:
                            nome:
                        estado: {
                            id:
                                nome:
                            sigla:

                    }
                    }
                }
            }

            res.send(result);
        });
    }