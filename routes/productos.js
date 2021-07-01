const {Router} = require('express');
const {postProductos,putProductos,getProducts}=require('../controllers/productos');
const router = Router();

router.post('/',postProductos);

router.put('/:id',putProductos);

router.get('/',getProducts)

module.exports = router;