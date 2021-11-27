import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../../redux/actions/productActions';
import { addToCart } from '../../redux/actions/cartActions';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import './ProductDescPage.css';

const ProductDescPage = ({ match, history }) => {
    const dispatch = useDispatch();

    const getDetails = useSelector(state => state.getProductDetails);
    const { product, loading, error } = getDetails;

    useEffect(() => {
        if (product && match.params.id !== product._id) {
          dispatch(getProductDetails(match.params.id));
        }
    }, [dispatch, match, product]);

    const addToCartHandler = () => {
        dispatch(addToCart(product._id));
        history.push(`/cart`);
    };

    return (
        <div>
            {loading ? <h1>Loading...</h1> : error ? <h1>{error}</h1> : (
                <>
                    <Link to="/"><button className="go-back__btn">Go Back</button></Link>
                    <div className="ProductDesc__container">
                        <img src={product.image} />
                        <p>{product.name}</p>
                        <p>Price: {product.price}</p>
                        <p>{product.description}</p>
                        <AddShoppingCartIcon onClick={addToCartHandler} />
                    </div> 
                </>
            )}
        </div>
    );
}

export default ProductDescPage;