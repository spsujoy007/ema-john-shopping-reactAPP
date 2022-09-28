import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    console.log(cart);
    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping;
    }

    // tax 
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className='CartMenu'>
            <h3>Order summury</h3>
            <p>Selected Items: <span>{cart.length}</span> </p>
            <p>Total Price: <span>${total}</span> </p>
            <p>Total shipping: <span>${shipping}</span>  </p>
            <p>Tax: <span>${tax}</span> </p>
            <b>Grand total: <span>${grandTotal.toFixed(2)}</span></b>
            {/* <h3>Grand Total: {product.price}</h3> */}
        </div>
    );
};

export default Cart;