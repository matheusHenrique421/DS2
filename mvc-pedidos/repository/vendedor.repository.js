const connection = require('../mysql-connection');

module.exports = {
    find: (callback) => {
        connection.query('SELECT * FROM vendedor', callback);
    },
    findById: (params, callback) => {
        connection.query('SELECT * FROM vendedor WHERE id = ?', [params.id], callback);
    },
    create: (params, callback) => {
        connection.query('INSERT INTO vendedor (codigo,nome,email) VALUES (?,?,?)', [params.codigo, params.nome, params.email], callback);
    },
    update: (params, callback) => {
        connection.query('UPDATE vendedor SET codigo = ?, nome = ?, email = ? WHERE id = ?', [params.codigo, params.nome, params.email, params.id], callback);
    },
    delete: (params, callback) => {
        connection.query('DELETE FROM vendedor WHERE id = ?', [params.id], callback);
    }
}