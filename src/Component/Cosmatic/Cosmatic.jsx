import React from 'react';
import './Cosmatic.css'
const Cosmatic = (props) => {
    const {name,Price,id} = props.cosmetic
    return (
        <div className='product'>
            <h2>By this: {name}</h2>
            <h2>Only for:  {Price}$</h2>
            <p><small>ID: {id}</small></p>
            <button>Add to cart</button>
        </div>
    );
};

export default Cosmatic;