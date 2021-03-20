import React from 'react'
import Products from './section/Products'
import ProductItem from './section/ProductItem'
import Cart from './section/Cart'
import {Route} from "react-router-dom"


function Section() {
    return (
        <div>
            <section>
                <Route path="/products" component={Products} exact />
                <Route path="/products/:id" component={ProductItem} />
                <Route path="/cart" component={Cart} />
            </section>
        </div>
    )
}

export default Section;
