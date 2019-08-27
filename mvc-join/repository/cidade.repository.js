const connection = require('../mysql-connection');


const query = 'SELECT c.id AS cidade_id, c.nome AS cidade_nome,' +
    'e.id AS estado_id, e.nome AS estado_nome, e.sigla AS estado_sigla' +
    'FROM cidade c' +
    'INNER JOIN estado e ON e.id = c.estado_id';


module.exports = {
    find: (callback) => {
        connection.query('SELECT * FROM cidade', callback);
    },
    findById: (params, callback) => {
        connection.query('SELECT * FROM cidade WHERE id = ?', [params.id], callback);
    },
    create: (params, callback) => {
        connection.query('INSERT INTO cidade (nome,estado_id) VALUES(?,?)', [params.nome, params.estado_id], callback);
    },
    update: (params, callback) => {
        connection.query('UPDATE cidade SET nome = ? estado = ? WHERE id = ?', [params.name, params.id], callback);
    },
    delete: (params, callback) => {
        connection.query('DELETE FROM cidade WHERE id = ?', [params.id], callback);
    }
}