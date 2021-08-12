import  React from 'react';
import { Link } from 'react-router-dom';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import './SingleProduct.css';

const SingleProduct = props => {
    return (
        <div className="single-product__wrap">
            <img src={props.image} />
            <p>{props.name}</p>
            <p>{props.price}</p>
            <p>{props.desc}</p>
            <Link to="/product-description"><button>VIEW</button></Link>
            <AddShoppingCartIcon />
        </div>
    );
}

export default SingleProduct;