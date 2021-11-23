import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import SingleProduct from '../SingleProduct/SingleProduct';
import './ProductList.css';

import { getProducts as listProducts } from '../../redux/actions/productActions';

const ProductList = () => {
    const dispatch = useDispatch();

    const getProducts = useSelector(state => state.getProducts);
    const { products, loading, error } = getProducts;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch])

    return (
        <div className="product-list__wrap">
            {loading ? <h1>Loading...</h1> : error ? <h1>{error}</h1> : products.map(product => (
                <SingleProduct 
                    key={product._id} 
                    id={product._id} 
                    imageUrl={product.image}
                    name={product.name}
                    price={product.price}
                    desc={product.description}
                />
            ))}
        </div>
    );
}

export default ProductList;