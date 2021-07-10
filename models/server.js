const express = require('express');
const cors = require('cors');
const {dbConnection}=require('../database/config');

class server{
    constructor()
    {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
        //conectar a base de datos
        this.connectDB();
        //middlewares
        this.middlewares();
        //rutas
        this.routes();
    }

   async connectDB()
    {
        await dbConnection();
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
    }

    listen()
    {
        this.app.listen(this.port,()=>{
            console.log(`Trabajando en puerto ${this.port}`);
        });
    }
}

module.exports = server;