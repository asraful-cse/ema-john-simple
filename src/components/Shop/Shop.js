import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css';
import Cart from '../Cart/Cart';
const Shop = () => {
    // console.log(fakeData);
    const first10 = fakeData.slice(0, 10);
    // console.log(first10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);          // [] cart er value blank er jonno dite hobe

    const handleAddProduct = (product) => {                // state jeikhane hobe seikhane event handler use korte hobe..
        // console.log('product added', product);             // console diye must be dekhte hobe?

        const newCart = [...cart, product]    // click korle add hobe..
        setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {/* <ul> */}
                {
                    products.map(pd => <Product
                        handleAddProduct={handleAddProduct}
                        product={pd}></Product>)            // li hisebe first a niyecilam
                }
                {/* </ul> */}
            </div>
            {/* cart ke pass kore cart js er props kore pathano holo */}
            <div className="cart-container">
                {/* <h4> This is cart:</h4>
                <h5> Order Summary: {cart.length} </h5> */}

                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;