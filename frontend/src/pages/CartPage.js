import React from 'react';
import CartItem from '../components/CartItem/CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CartPage = () => {
    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    return (
        <div>
            <h1>Cart page</h1>
            {cartItems.length === 0 ? (
                <div>
                    You don't have anything in your cart yet <Link to="/">Go Back</Link>
                </div>
            ) : cartItems.map(item => (
                <CartItem item={item} />
            ))}
        </div>
    )
}

export default CartPage;