import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import img from '../../images/giphy.gif';
import { useHistory } from 'react-router';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderplaced] = useState(false);
const history = useHistory()
    const handleProceedCheckout = () => {
history.push('/shipment')

    }

    const removeProduct = (productKey) => {
        // console.log('remove click', productKey)
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    useEffect(() => {
        // cart
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        // console.log(productKeys);
        // const counts = productKeys.map(key => savedCart[key]);
        // console.log(counts);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        // console.log(cartProducts);
        setCart(cartProducts);
    }, []);

    let thankyou;
    if (orderPlaced) {
        thankyou = <img src={img} alt="" />
    }

    return (
        <div className="twin-container">
            {/* <h1>Cart Items: {cart.length}</h1> */}
            <div className="product-container">
                {
                    cart.map(pd => <ReviewItem
                        key={pd.key}
                        removeProduct={removeProduct}
                        product={pd}></ReviewItem>)
                }
                {
                    thankyou
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handleProceedCheckout} className="main-button">
                        Proceed Checkout
                    </button>
                </Cart>
            </div>
            
        </div>
    );
};

export default Review;