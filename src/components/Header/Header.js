import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logo.png';    // img er jonno folder select
import './Header.css';     // css er jonno link

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext); // sign out er jonno use kora hoyese
    return (
        <div className="header">
            <img src={logo} alt="" />
            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/review">Order Review</Link>
                <Link to="/inventory">Manage Inventory</Link>
                <button onClick={() => setLoggedInUser({})}>Sign out</button>     
            </nav>
        </div>
    );
};

export default Header;