import React from 'react'
//Routing
import {Link} from 'react-router-dom'
//Icons
import Menu from './svg/bars.svg'
import Close from './svg/times.svg'
import CartIcon from './svg/shopping-cart.svg'
// Styles
import './css/Header.css'

function Header() {
    return (
        <header>
            <div className="menu">
                <img src={Menu} alt="menu" width="20" />
            </div>
            <div className="logo">
                <h1><Link to="/" >Mini Shopping Project</Link></h1>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/loginAndRegister">Login / Register</Link></li>
                    <li className="close">
                    <img src={Close} alt="menu" width="20" />
                    </li>
                </ul>
                <div className="nav-cart">
                    <span>0</span>
                    <Link to="/cart">
                        <img src={CartIcon} alt="menu" width="30" />
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Header
