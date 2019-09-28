const repository = require('../repository/prova.repository');

module.exports = {
    find :(req,res) => {

        repository.find((error, result) => {
            if (error) {
                res.status(500).send(error);
            }

            const cidades = [];

            for (item of result) {

                //Converte de RELACIONAL para OBJETO
                let prova = {
                    id: item.cidade_id,
                    nome: item.cidade_nome,
                    tabelapreco: {
                        id: item.tabelapreco_id,
                        nome: item.estado_nome,
                        sigla: item.estado_sigla
                    }
                }
                
                cidades.push(prova);
            }

            res.send(cidades);
        });

    },
    create: (req,res) => { 
        
        //Converter de OBJETO para RELACIONAL
        const prova = {
            nome: req.body.nome,
            tabelapreco_id: req.body.tabelapreco.id
        }

        repository.create(prova, (error, result) => {
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

            //Converte de RELACIONAL para OBJETO
            let prova = {
                id: result[0].cidade_id,
                nome: result[0].cidade_nome,
                tabelapreco: {
                    id: result[0].tabelapreco_id,
                    nome: result[0].estado_nome,
                    sigla: result[0].estado_sigla
                }
            }

            res.send(prova);
        });
    },
    update: (req,res) => {
        //Converter de OBJETO para RELACIONAL
        const prova = {
            id: req.params.id,
            nome: req.body.nome,
            tabelapreco_id: req.body.tabelapreco.id
        }
        
        repository.update(prova, (error, result) => {
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