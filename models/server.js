const express = require('express')
const cors = require('cors')

class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT || 3000;
        this.usuariosPath = '/api/usuarios';


        //Middleware
        this.middlewares();

        //Rutas de mi aplicaccion
        this.routes();
    }

    middlewares() {

        //Cors
        this.app.use(cors());

        //Lectura y parseo del bod
        this.app.use(express.json());

        // Directorio Publico
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.usuariosPath, require('../routes/usuariosRouter'))
    }

    listen(){
        this.app.listen(process.env.PORT, () => {
            console.log('Servidor corriendo puerto', this.port)
        });
    }
}

module.exports = Server;
