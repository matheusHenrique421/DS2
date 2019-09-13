const connection = require('../mysql-connection');

module.exports = {
    find: (callback) => {
        connection.query('SELECT * FROM produto', callback);
    },
    findById: (params, callback) => {
        connection.query('SELECT * FROM produto WHERE id = ?', [params.id], callback);
    },
    create: (params, callback) => {
        connection.query('INSERT INTO produto (codigo,nome,descricao,preco) VALUES (?,?,?,?)', [params.codigo, params.nome, params.descricao, params.preco], callback);
    },
    update: (params, callback) => {
        connection.query('UPDATE produto SET codigo = ?, nome = ?, descricao = ?, preco = ? WHERE id = ?', [params.codigo, params.nome, params.descricao, params.preco, params.id], callback);
    },
    delete: (params, callback) => {
        connection.query('DELETE FROM produto WHERE id = ?', [params.id], callback);
    }
}