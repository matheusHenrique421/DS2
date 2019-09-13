const connection = require('../mysql-connection');

module.exports = {
    find: (callback) => {
        connection.query('SELECT * FROM cliente', callback);
    },
    findById: (params, callback) => {
        connection.query('SELECT * FROM cliente WHERE id = ?', [params.id], callback);
    },
    create: (params, callback) => {
        connection.query('INSERT INTO cliente (codigo,nome,email) VALUES (?,?,?)', [params.codigo, params.nome, params.email], callback);
    },
    update: (params, callback) => {
        connection.query('UPDATE cliente SET codigo = ?, nome = ?, email = ? WHERE id = ?', [params.codigo, params.nome, params.email, params.id], callback);
    },
    delete: (params, callback) => {
        connection.query('DELETE FROM cliente WHERE id = ?', [params.id], callback);
    }
}