import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { cartReducer } from './reducers/cartReducers';
import { getProductDetailsReducer, getProductsReducer } from './reducers/productReducers';

const reducer = combineReducers({
  cart: cartReducer,
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer
});

const cartFromLocalStorage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []

const INITIAL_STATE = {
  cart: {
    cartItems: cartFromLocalStorage
  }
}

const store = createStore(reducer, INITIAL_STATE, applyMiddleware(thunk));

export default store;