const express = require('express');
const mongoose = require('mongoose');

const productRoutes = require('./routes/products-routes'); 

const PORT = process.env.PORT || 5000;

const app = express();

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

app.use('/products', productRoutes);

mongoose.connect('mongodb+srv://Admin:Admin@cluster0.qge7c.mongodb.net/online-store?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});