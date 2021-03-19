import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import '../css/Products.css'

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        fetch("https://60539ba845e4b300172920cd.mockapi.io/api/products")
        .then(response => response.json())
        .then(response => setProducts(response));
    }, [])



    return (
        <div id="product">
            {
                products.map(product => (
                    <div className="card" key={product.id}>
                        <Link to={`/product/${product.id}`}>
                            <img src={product.image} alt={product.name}/>
                        </Link>
                        <div className="content">
                            <h3>
                                <Link to={`/product/${product.id}`}>{product.name}</Link>
                            </h3>
                            <span>${product.price}</span>
                            <p>{product.description}</p>
                            <button>Add to card</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Products
