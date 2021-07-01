const {Router} = require('express');
const {UsuariosGet,UsuariosPut,UsuariosPost,UsuariosDelete} = require('../controllers/usuarios');
const router = Router();

router.get('/', UsuariosGet);
//Put utiliza parametros de segmentacion
router.put('/:id&:id2', UsuariosPut);

router.post('/', UsuariosPost);

router.delete('/', UsuariosDelete);

module.exports = router;