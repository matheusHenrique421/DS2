const knex = require('../mysql-connection');

module.exports = {
    find: () => {
        return knex.select().from('estado');
    },
    findById: (params) => {
        return knex.select().from('estado').where({id: params.id});
    },
    create: (params) => {
        return knex.insert(params).into('estado');
    },
    update: (params) => {
        return knex('estado').update(params).where({id: params.id});
    },
    delete: (params) => {
        return knex('estado').del().where({id: params.id});
    }
}