const knex = require('../mysql-connection');

module.exports = {
    find: () => {
        return knex.select('c.id as cidade_id', 'c.nome as cidade_nome', 'e.id as estado_id', 'e.nome as estado_nome', 'e.sigla as estado_sigla').from('cidade as c').innerJoin('estado as e', 'e.id', 'c.estado_id');
    },
    findById: (params) => {
        return knex.select().from('cidade').where({id: params.id});
    },
    create: (params) => {
        return knex.insert(params).into('cidade');
    },
    update: (params) => {
        return knex('cidade').update(params).where({id: params.id});
    },
    delete: (params) => {
        return knex('cidade').del().where({id: params.id});
    }
}