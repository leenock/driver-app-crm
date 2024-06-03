const express = require('express');
const {registeruser,getuser,getuserById, getProducts, getProductById, createProduct } = require('../controllers/UserController');

const router = express.Router();


router.get('/drivers', getuser);
router.get('/drivers/:id', getuserById);
router.post('/drivers', registeruser);

router.get('/products', getProducts);
router.get('/products/:id', getProductById);
router.post('/products', createProduct);

module.exports = router;
