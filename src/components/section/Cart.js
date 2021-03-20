import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import '../css/Cart.css';

const Cart = (props) => {
    return (
        <div>
            {
                props.cart.map(item =>(
                    <div className="details" key={item.id}>
                        <img src={item.image} alt={item.name}/>
                        <div className="box">
                            <div className="row">
                                <h2>{item.name}</h2>
                                <span>${item.price}</span>
                            </div>
                            
                            <p>{item.description}</p>
                            <Link to="/cart" className="cart">
                                Add To Cart
                            </Link>
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

export default connect(mapStateToProps)(Cart);