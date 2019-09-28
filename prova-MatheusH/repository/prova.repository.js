const connection = require('../mysql-connection');

const query = 'SELECT c.id AS cidade_id, c.nome AS cidade_nome, '+
              'e.id AS estado_id, e.nome AS estado_nome, e.sigla AS estado_sigla '+
              'FROM cidade c '+
              'INNER JOIN estado e ON e.id = c.estado_id ';
    

module.exports = {
    find: (callback) => {
        connection.query(query , callback);     
    },
    findById: (params, callback) => {
        connection.query(query +' WHERE c.id = ?', [params.id], callback);
    },
    create: (params, callback) => {
        connection.query('INSERT INTO cidade (nome,estado_id) VALUES (?,?)', [params.nome, params.estado_id], callback);
    },
    update: (params, callback) => {
        connection.query('UPDATE cidade SET nome = ?, estado_id = ? WHERE id = ?', [params.nome, params.estado_id,params.id], callback);
    },
    delete: (params, callback) => {
        connection.query('DELETE FROM cidade WHERE id = ?', [params.id], callback);
    }
}