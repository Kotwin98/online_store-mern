import React from 'react';
import { Link } from 'react-router-dom';
import './CartItem.css';

const CartItem = ({item}) => {
  console.log(item);
  return (
    <div>
      <div>
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <Link to={`/product/${item.product}`}>
        <p>{item.name}</p>
      </Link>
      <p>{item.price}</p>
    </div>
  )
}

export default CartItem;