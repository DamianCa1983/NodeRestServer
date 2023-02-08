
const { Router } = require('express');
const { 
  obtenerUsuarios, 
  editarUsuario, 
  crearUsuario, 
  eliminarUsuario,
  editarDatoUsuario
 } = require('../controllers/usuariosControllers');

const router = Router();

  router.get('/', obtenerUsuarios);
  router.put('/:id', editarUsuario);
  router.post('/', crearUsuario);
  router.delete('/', eliminarUsuario);
  router.patch('/', editarDatoUsuario);


module.exports = router;