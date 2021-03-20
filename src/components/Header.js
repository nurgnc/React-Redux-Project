import React, {useState} from 'react'
//Routing
import {Link} from 'react-router-dom'
//Icons
import Menu from './svg/bars.svg'
import Close from './svg/times.svg'
import CartIcon from './svg/shopping-cart.svg'
// Styles
import './css/Header.css'
//Redux
import { connect } from 'react-redux';

const Header = (props) => {
    const [toggle, setToggle] = useState(false);

    const menuToggle = () => setToggle(!toggle);

    return (
        <header>
            <div className="menu" onClick={menuToggle}>
                <img src={Menu} alt="menu" width="20" />
            </div>
            <div className="logo">
                <h1><Link to="/" style={{textDecoration: "none"}}>Shop</Link></h1>
            </div>
            <nav>
                <ul className={toggle ? "toggle" : ""}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/loginRegister">Login / Register</Link></li>
                    <li className="close" onClick={menuToggle}>
                        <img src={Close} alt="menu" width="20" />
                    </li>
                </ul>
                <div className="nav-cart">
                    <span>{props.cart.length}</span>
                    <Link to="/cart">
                        <img src={CartIcon} alt="menu" width="30" />
                    </Link>
                </div>
            </nav>
        </header>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
        cart: state.cart
    };
};

export default connect(mapStateToProps)(Header);
