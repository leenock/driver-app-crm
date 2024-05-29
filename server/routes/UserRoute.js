const express = require('express');
const { getProducts, getProductById, createProduct } = require('../controllers/UserController');

const router = express.Router();

router.get('/products', getProducts);
router.get('/products/:id', getProductById);
router.post('/products', createProduct);

module.exports = router;
