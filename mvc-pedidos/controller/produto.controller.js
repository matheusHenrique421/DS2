const repository = require('../repository/produto.repository');

module.exports = {
    find :(req,res) => {

        repository.find((error, result) => {
            if (error) {
                res.status(500).send(error);
            }

            res.send(result);
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