require("dotenv").config();

const connectDB = require('./config/db');
const productData = require('./data/products');
const product = require('./models/Product');

connectDB();

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