import React from 'react'
import './checkout-item.styles.scss'

import { connect } from 'react-redux'
import { clearItem, removeItem, addItem } from '../../redux/cart/cart.actions'

const CheckoutItem = ({ cartItem, clearItem, removeItem, addItem }) => {
    const { name, quantity, price } = cartItem
    return (
        <div className="checkout-item">
            <div className="image-container" >
                <img alt="item" src={cartItem.imageUrl} />
            </div>
            <span className="name"> {name} </span>
            <div className="quantity">
                <span className="symbol" style={{fontSize:"22px", fontWeight:"bolder", cursor:"pointer"}}
                onClick={()=> removeItem(cartItem)}
                >&#10094;</span>
                <span className="quantity">{quantity}</span>
                <span className="symbol" style={{fontSize:"22px", fontWeight:"bolder", cursor:"pointer"}}
                onClick={()=> addItem(cartItem)}
                > &#10095;</span>
            </div>
            <span className="price"> {price} </span>
            <span className="remove-button" onClick={() => clearItem(cartItem)}> &#10005; </span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem : item => dispatch(clearItem(item)),
    removeItem : item => dispatch(removeItem(item)),
    addItem : item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)