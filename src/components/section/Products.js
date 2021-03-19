import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import '../css/Products.css'

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://60539ba845e4b300172920cd.mockapi.io/api/products')
        .then(response => setProducts(response.data))
        .catch(error => console.log({ error }));
    }, []);



    return (
        <div id="product">
            {
                products.map(product => (
                    <div className="card" key={product.id}>
                        <Link to={`/products/${product.id}`}>
                            <img src={product.image} alt={product.name}/>
                        </Link>
                        <div className="content">
                            <h3>
                                <Link to={`/products/${product.id}`} style={{textDecoration: "none"}}>{product.name}</Link>
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

