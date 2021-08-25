const mongoose = require('mongoose');

const productData = require('./data/products');
const product = require('./models/Product');

mongoose.connect('mongodb+srv://Admin:Admin@cluster0.qge7c.mongodb.net/online-store?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

const uploadData = async () => {
    try {
        await product.deleteMany({});

        await product.insertMany(productData);

        console.log('Data Import Success');

        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

uploadData();