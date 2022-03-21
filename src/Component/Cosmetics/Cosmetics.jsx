import React, { useEffect, useState } from 'react';
import Cosmatic from '../Cosmatic/Cosmatic';

const Cosmetics = (props) => {
    const [cosmetics,setCosmetics] = useState([])
    useEffect(()=>{
        // https://cosmatic.free.beeceptor.com
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCosmetics(data))
    },[])
    return (
        <div>
            <h1>Welcome to my cosmetics store</h1>
            {
                cosmetics.map(cosmetic => <Cosmatic
                    key = {cosmetic.id} 
                    cosmetic={cosmetic}
                    ></Cosmatic>)
            }
        </div>
    );
};

export default Cosmetics;