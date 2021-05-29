import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './product.css';
import { Link } from 'react-router-dom';

const Product = (props) => {
    // console.log(props);
    const { img, name, seller, price, stock, key } = props.product;   // short krar jonno destructuring kora holeo..
    return (
        <div className="product">
            <div>
                {/* <img src={props.product.img} alt="" /> */}
                <img src={img} alt="" />
            </div>
            <div>
                {/* <h4>{props.product.name}</h4> */}
                <h4 className="product-name"> <Link to={"/product/" + key}>{name}</Link> </h4>
                <br />
                <p><small>by: {seller}</small></p>
                <br />
                <p>${price}</p>
                <p><small>Only {stock} left in stock - Order soon</small></p>
              { props.showAddToCart && <button 
                className="main-button"
                    // onClick={props.handleAddProduct(props.product)}  >   /// eivabe hobena bcz eita bad ..sorasori call korle hobena
                    onClick={() => props.handleAddProduct(props.product)}  >

                    <FontAwesomeIcon icon={faShoppingCart} /> add to cart
               </button>} 
            </div>
        </div>
    );
};

export default Product;