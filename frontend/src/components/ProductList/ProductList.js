import React from 'react';

import SingleProduct from '../SingleProduct/SingleProduct';
import './ProductList.css';

const DUMMY__PRODUCTS = [
    {
        id: 0,
        image: 'https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        name: 'Product name 1',
        price: 100,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper odio eu augue pellentesque tincidunt. In erat est, elementum vitae gravida at, ullamcorper non nunc.'
    },
    {
        id: 1,
        image: 'https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        name: 'Product name 2',
        price: 100,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper odio eu augue pellentesque tincidunt. In erat est, elementum vitae gravida at, ullamcorper non nunc.'
    },
    {
        id: 2,
        image: 'https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        name: 'Product name 3',
        price: 100,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper odio eu augue pellentesque tincidunt. In erat est, elementum vitae gravida at, ullamcorper non nunc.'
    },
    {
        id: 3,
        image: 'https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        name: 'Product name 4',
        price: 100,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper odio eu augue pellentesque tincidunt. In erat est, elementum vitae gravida at, ullamcorper non nunc.'
    }
]

const ProductList = props => {
    return (
        <div className="product-list__wrap">
            {DUMMY__PRODUCTS.map(el => {
                return (
                    <SingleProduct 
                        image={el.image}
                        name={el.name}
                        price={el.price}
                        desc={el.desc}
                    />
                )
            })}
        </div>
    );
}

export default ProductList;