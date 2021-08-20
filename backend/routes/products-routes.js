const express = require('express');
const router = express.Router();

const productsController = require('../controllers/product-controllers');

router.get('/', productsController.getProducts);

module.exports = router;