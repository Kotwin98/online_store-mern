const Product = require('../models/Product');

const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch {
        throw new Error('Sorry, we have a server error');
    }
}

exports.getProducts = getProducts;