import { createConnection, Connection } from 'typeorm';
import * as htpp from 'http';
import app from './app';

createConnection().then(Connection => {

    const server = htpp.createServer(app);
    server.listen(3000, () => {
        console.log('Aplicação está rodando na porta 3000');
    })

}).catch(error => {
    
    console.log('typeORM dont connected %s', error);
});