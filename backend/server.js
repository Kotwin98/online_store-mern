const express = require('express');

const productRoutes = require('./routes/products-routes'); 

const PORT = process.env.PORT || 5000;

const app = express();

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

app.use('/products', productRoutes);