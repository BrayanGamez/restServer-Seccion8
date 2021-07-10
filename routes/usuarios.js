const {Router} = require('express');
const {UsuariosGet,UsuariosPut,UsuariosPost,UsuariosDelete} = require('../controllers/usuarios');
const router = Router();
const {check} = require('express-validator');
const {validarCampos} =require('../middlewares/validar-campos');
const {esRoleValido,esEmailValido,existeUsuarioID} = require('../helpers/dbvalidators');


router.get('/',[
    check('limite','No es un numero').isNumeric(),
    check('desde','No es numerico').isNumeric(),
    validarCampos
], UsuariosGet);
//Put utiliza parametros de segmentacion
router.put('/:id',[
    check('id','No es un ID de mongo').isMongoId(),
    check('id').custom(existeUsuarioID),
    check('rol').custom(esRoleValido),
    validarCampos
], UsuariosPut);

router.post('/',[check('nombre','El nombre es obligatorio').not().isEmpty(),
check('password','La password debe poseer mas de 6 caracteres').isLength({min:6}),
check('correo','Este correo no es valido').isEmail(),
check('correo').custom(esEmailValido),
check('rol').custom(esRoleValido)] ,
validarCampos,UsuariosPost);

router.delete('/:id',[
    check('id','No es un ID de mongo').isMongoId(),
    check('id').custom(existeUsuarioID),
    validarCampos
], UsuariosDelete);

module.exports = router;