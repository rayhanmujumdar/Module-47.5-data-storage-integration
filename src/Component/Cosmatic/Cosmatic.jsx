import React from 'react';
import { addDb } from '../../Utilities/fakeDb';
import './Cosmatic.css'
const Cosmatic = (props) => {
    const {name,Price,id} = props.cosmetic
    const addToCart = (id) => {
        // const Mycosmetic = props.cosmetic
        addDb(id)
    }
    const addToCartWith = () => addToCart(id)
    return (
        <div className='product'>
            <h2>By this: {name}</h2>
            <h2>Only for:  {Price}$</h2>
            <p><small>ID: {id}</small></p>
            <button onClick={addToCartWith} >Add to cart</button>{/* wrong but working */}
            <button onClick={() => addToCart(id)} >Add to cart: shortcut</button> {/* right */}
        </div>
    );
};

export default Cosmatic;