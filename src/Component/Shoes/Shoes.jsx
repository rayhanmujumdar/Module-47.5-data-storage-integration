import React from 'react';
import { add, multifly } from '../../Utilities/Utilities';
const Shoes = () => {
    const first = 5;
    const second = 6;
    const result = multifly(first,second);
    return (
        <div>
            <h1>This my shoes</h1>
            <p>Price: {result}</p>
            <h3>This my second shoes</h3>
            <p>Price: {add(first,second)}</p>
        </div>
    );
};

export default Shoes;