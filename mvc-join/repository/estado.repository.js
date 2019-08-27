const connection = require('../mysql-connection');

module.exports = {
    find: (callback) => {
        connection.query('SELECT * FROM estado', callback);
    },
    findById: (params, callback) => {
        connection.query('SELECT * FROM estado WHERE id = ?', [params.id], callback);
    },
    create: (params, callback) => {
        connection.query('INSERT INTO estado (nome,sigla) VALUES(?,?)', [params.nome, params.sigla], callback);
    },
    update: (params, callback) => {
        connection.query('UPDATE estado SET nome = ?, sigla = ? WHERE id = ?', [params.nome, params.sigla, params.id], callback);
    },
    delete: (params, callback) => {
        connection.query('DELETE FROM estado WHERE id = ?', [params.id], callback);
    }
}