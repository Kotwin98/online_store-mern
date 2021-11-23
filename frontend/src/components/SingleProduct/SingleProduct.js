import  React from 'react';
import { Link } from 'react-router-dom';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import './SingleProduct.css';

const SingleProduct = ({name, imageUrl, desc, price, id}) => {
    return (
        <div className="single-product__wrap">
            <img src={imageUrl} />
            <p>{name}</p>
            <p>{price}</p>
            <p>{desc}</p>
            <Link to={`/product-description/${id}`}><button>VIEW</button></Link>
            <AddShoppingCartIcon />
        </div>
    );
}

export default SingleProduct;