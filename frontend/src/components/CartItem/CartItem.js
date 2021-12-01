import React from 'react';
import { Link } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import './CartItem.css';

const CartItem = ({ item, removeFromCart }) => {
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
      <DeleteIcon onClick={() => removeFromCart(item.product)} />
    </div>
  )
}

export default CartItem;