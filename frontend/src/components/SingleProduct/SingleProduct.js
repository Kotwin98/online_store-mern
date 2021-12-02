import  React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
// import { addToCart } from '../../redux/actions/cartActions';

import './SingleProduct.css';

const SingleProduct = ({name, imageUrl, desc, price, id}) => {
    return (
        <div className="single-product__wrap">
            <img src={imageUrl} />
            <p>{name}</p>
            <p>{price}</p>
            <p>{desc}</p>
            <Link to={`/product-description/${id}`}><button>VIEW</button></Link>
            {/* <AddShoppingCartIcon onClick={addToCartHandler} /> */}
        </div>
    );
}

export default SingleProduct;