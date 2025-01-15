import React from 'react';


export default function Discount() {
    
    const [price, setPrice] = React.useState(100);
    const applyDiscount = () => {
        setPrice(75)
    }
    
    return (
        <div id='app'>
            <p data-testid="price">${price}</p>
            <button onClick={applyDiscount}>Apply Discount</button>
        </div>
    );
}
