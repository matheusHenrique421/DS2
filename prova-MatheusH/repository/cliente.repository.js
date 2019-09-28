const connection = require('../mysql-connection');

const sql = ' SELECT c.id as c_id, c.nome as c_nome, c.codigo, c.email,'+
            'cd.id as cd_id, cd.nome as cd_nome, e.id as e_id, e.nome as e_nome, e.sigla, tp.id as tp_id,tp.codigo as tp_codigo'+            
            ' FROM cliente c'+
            ''+
            ''