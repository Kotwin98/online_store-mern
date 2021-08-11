import React from 'react';
import { NavLink } from 'react-router-dom';

import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import './MainNavigation.css';

const MainNavigation = props => {
    return (
        <div className="navigation__wrapper">
            <NavLink to="/">Online Store</NavLink>
            <NavLink to="/cart"><ShoppingBasketIcon /></NavLink>
            <NavLink to="/faq">FAQ</NavLink>
        </div>
    );
}

export default MainNavigation;