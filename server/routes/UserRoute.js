const express = require('express');
const {registerUser, getProducts, getProductById, createProduct } = require('../controllers/UserController');

const router = express.Router();

router.post('/register', registerUser);
router.get('/products', getProducts);
router.get('/products/:id', getProductById);
router.post('/products', createProduct);

module.exports = router;
