const express = require('express');
const cors = require('cors');

class server{
    constructor()
    {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
        this.productosPath = '/api/productos';
        //middlewares
        this.middlewares();
        //rutas
        this.routes();
    }

    middlewares()
    {
        //cors
        this.app.use(cors());
        //Lectura y parseo
        this.app.use(express.json());
        //directorio publico
        this.app.use(express.static('public'));
    }

    routes()
    {
        this.app.use(this.usuariosPath,require('../routes/usuarios'));
        this.app.use(this.productosPath,require('../routes/productos'));
    }

    listen()
    {
        this.app.listen(this.port,()=>{
            console.log(`Trabajando en puerto ${this.port}`);
        });
    }
}

module.exports = server;