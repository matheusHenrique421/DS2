const respository = require('../repository/person.repository');

const persons = [];

module.exports = {
    find: (req, res) => {

        respository.find((error, result) => {
            if (error) {
                res.status(500).send(error)
            }

            res.send(result);
        });
    },

    create: (req, res) => {

        respository.create(req.body, (error, result) => {
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