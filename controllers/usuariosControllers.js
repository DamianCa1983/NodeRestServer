const { response } = require('express');


    const obtenerUsuarios = (req, res = response) => {
        res.json({
            "msg": "Get Api - Controlador"
        });
    }

   const crearUsuario = (req, res = response) => {
        const body = req.body;
        res.json({
            "msg": "Post Api - Controlador",
            body
        });
    }

    const editarUsuario = (req, res = response) => {
        const id = req.params.id;
        res.json({
            "msg": "Put Api - Controlador",
            id
        });
    }

    const editarDatoUsuario = (req, res = response) => {
        res.json({
            "msg": "Patch Api - Controlador"
        });
    }

    const eliminarUsuario = (req, res = response) => {
        res.json({
            "msg": "Delete Api - Controlador"
        });
    }


module.exports = {
    obtenerUsuarios,
    crearUsuario,
    editarUsuario,
    editarDatoUsuario,
    eliminarUsuario
}