import React from 'react'
import Products from './section/Products'
import ProductItem from './section/ProductItem'
import {Route} from "react-router-dom"


function Section() {
    return (
        <div>
            <section>
                <Route path="/products" component={Products} exact />
                <Route path="/products/:id" component={ProductItem} />
            </section>
        </div>
    )
}

export default Section
