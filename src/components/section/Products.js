import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../css/Products.css'
//Redux
import { connect } from 'react-redux';
import { getProducts } from '../../store/actions/Api';
import { addToCart } from '../../store/actions/AddToCart';

const Products = (props) => {

    useEffect(() => {
        props.getProducts();
    }, []);



    return (
        <div id="product">
            {
                props.products.map(product => (
                    <div className="card" key={product.id}>
                        <Link to={`/products/${product.id}`}>
                            <img src={product.image} alt={product.name} />
                        </Link>
                        <div className="content">
                            <h3>
                                <Link to={`/products/${product.id}`} style={{ textDecoration: "none" }}>{product.name}</Link>
                            </h3>
                            <span>${product.price}</span>
                            <p>{product.description}</p>
                            <button onClick={() => props.addToCart(product)}>Add to cart</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
        cart: state.cart
    };
};

export default connect(mapStateToProps, {getProducts, addToCart})(Products);
