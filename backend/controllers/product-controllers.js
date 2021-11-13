const Product = require('../models/Product');

const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch {
        throw new Error('Sorry, we have a server error');
    }
}

const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.json(product);
    } catch {
        throw new Error('Sorry, we have a server error');
    }
}

module.exports = {
    getProducts,
    getProductById
}