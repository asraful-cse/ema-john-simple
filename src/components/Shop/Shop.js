import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';
const Shop = () => {
    // console.log(fakeData);
    const first10 = fakeData.slice(0, 10);
    // console.log(first10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);          // [] cart er value blank er jonno dite hobe

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map(existingKey => {
            const product = fakeData.find(pd => pd.key === existingKey);
            //    console.log(existingKey, savedCart[existingKey]);
            product.quantity = savedCart[existingKey];
            return product;

        })
        // console.log(savedCart);
        // console.log(previousCart);
        setCart(previousCart);
    }, [])


    const handleAddProduct = (product) => {                // state jeikhane hobe seikhane event handler use korte hobe..
        // console.log('product added', product);             // console diye must be dekhte hobe?
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey)       //modify kora hoyese NAN remove korar jonno..
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAddedKey);
            newCart = [...others, sameProduct];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }

        // const count = sameProduct.length;

        // const newCart = [...cart, product]    // click korle add hobe..
        setCart(newCart);
        // const sameProduct = newCart.filter(pd => pd.key === product.key)
        // const count = sameProduct.length;
        addToDatabaseCart(product.key, count);
    }
    return (
        <div className="twin-container">
            <div className="product-container">
                {/* <ul> */}
                {
                    products.map(pd => <Product
                        key={pd.key}                     // error remove korar jonno..
                        showAddToCart={true}
                        handleAddProduct={handleAddProduct}
                        product={pd}></Product>)         // li hisebe first a niyecilam
                }
                {/* </ul> */}
            </div>
            {/* cart ke pass kore cart js er props kore pathano holo */}
            <div className="cart-container">
                {/* <h4> This is cart:</h4>
                <h5> Order Summary: {cart.length} </h5> */}
                <Cart cart={cart}>
                    <Link to="/review">
                        <button className="main-button">Review Order</button>
                    </Link>

                </Cart>
            </div>

        </div>
    );
};

export default Shop;