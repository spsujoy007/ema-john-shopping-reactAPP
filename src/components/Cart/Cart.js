import React from 'react';

const Cart = ({ cart }) => {
    return (
        <div>
            <h3>Order summury</h3>
            <p>Selected Items: {cart.length} </p>
            <p>Total shipping charge: ${5 * cart.length}</p>
            <p>Tax: ${0}</p>
            {/* <h3>Grand Total: {product.price}</h3> */}
        </div>
    );
};

export default Cart;