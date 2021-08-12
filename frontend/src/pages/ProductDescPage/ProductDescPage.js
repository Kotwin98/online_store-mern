import React from 'react';
import { Link } from 'react-router-dom';

import './ProductDescPage.css';

const ProductDescPage = () => {
    return (
        <div>
            <Link to="/"><button className="go-back__btn">Go Back</button></Link>
            <div className="ProductDesc__container">
                <img src="https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                <p>Name</p>
                <p>Price</p>
                <p>Description</p>
            </div>
        </div>
    );
}

export default ProductDescPage;