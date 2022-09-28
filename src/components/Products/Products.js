import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Products.css'

const Products = ({ product, handleAddToCart }) => {
    // const { product, handleAddToCart } = props;
    const { img, name, price, seller, ratings } = product;

    return (
        <div className='singleProduct'>
            <img src={img} alt={name} title={seller} />

            <div className='product-main-detail'>
                <div className="product-details">
                    <h6 className='product-name'>{name}</h6>
                    <h3 className='product-price'>Price: ${price}</h3>
                    <p>Manufacturer: {seller}</p>
                    <p>Rating: {ratings}</p>
                </div>
                <button onClick={() => handleAddToCart(product)} className='cart-btn'>Add to cart
                    <span style={{ marginLeft: '7px' }}>
                        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                    </span>
                </button>
                {/* onClick={() => { props.Products }} */}
            </div>
        </div >
    );
};

export default Products;