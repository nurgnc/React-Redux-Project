import React from 'react'
import { Route } from "react-router-dom"
//Pages
import Products from './section/Products'
import ProductItem from './section/ProductItem'
import Cart from './section/Cart'
import Home from './section/Home'
import About from './section/About'
import Contact from './section/Contact'
import LoginRegister from './section/LoginRegister'



function Section() {
    return (
        <div>
            <section>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact}  />
                <Route path="/loginRegister" component={LoginRegister}  />
                <Route path="/products" component={Products} exact />
                <Route path="/products/:id" component={ProductItem} />
                <Route path="/cart" component={Cart} />
            </section>
        </div>
    )
}

export default Section;
