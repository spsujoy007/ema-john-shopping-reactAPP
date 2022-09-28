import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(Response => Response.json())
            .then(data => setProducts(data))
    }, []);
    const handleAddtoCart = (products) => {
        const newCart = [...cart, products];
        setCart(newCart);
        addToDb(products.id)
    }

    return (
        <div className='containerShop'>
            <div className='all-products'>
                {
                    products.map(product => <Products
                        key={products.id}
                        product={product}
                        handleAddToCart={handleAddtoCart}
                    >
                    </Products>)
                }
            </div>

            <div className='cartMenu'>
                <div className='cart-summury'>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;