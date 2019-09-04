const repository = require('../repository/cidade.repository');
module.exports = {
    find :(req,res) => {

        repository.find().then(result => {
            res.send(result);
        }).catch(error => {
            res.status(500).send(error);
        });

    },
    create: (req,res) => { 
        
        repository.create(req.body).then(result => {
            req.body.id = result[0];

            res.send(req.body);
        }).catch(error => {
            res.status(500).send(error);
        });
    },
    findById: (req,res) => {
        
        repository.findById(req.params).then(result => {

            if (result.length > 0) {
                res.send(result[0]);
            } else {
                res.status(404).send('not found');
            }

        }).catch(error => {
            res.status(500).send(error);
        });

    },
    update: (req,res) => {
        //Atualizar o id do objeto do req.body
        req.body.id = req.params.id;
        
        repository.update(req.body).then(result => {
            res.send(req.body);
        }).catch(error => {
            res.status(500).send(error);
        });
    },
    delete: (req,res) => {
        repository.delete(req.params).then(result => {

            if (result.length > 0) {
                res.status(204).send();
            } else {
                res.status(404).send('not found');
            }

        }).catch(error => {
            res.status(500).send(error);
        });
    }
}