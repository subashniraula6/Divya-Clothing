import React from 'react'

import './checkout.styles.scss'

import { connect } from 'react-redux'

import { selectCartItems, selectCartTotal } from '../../../redux/cart/cart-selectors'

import { createStructuredSelector } from 'reselect'

import CheckoutItem from '../../checkout-item/checkout-item.component'

import StripeCheckoutButton from '../../stripe-button/stripe-button.component'

const CheckoutPage = ({ cartItems, cartTotal }) => {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span> Product </span>
                </div>
                <div className="header-block">
                    <span> Description </span>
                </div>
                <div className="header-block">
                    <span> Quantity </span>
                </div>
                <div className="header-block">
                    <span> Price </span>
                </div>
                <div className="header-block">
                    <span> Remove </span>
                </div>
            </div>
            
            {
                cartItems.map((cartItem) => {
                    return <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                })

            }
            <div className="total">
                <span>Total: ${cartTotal} </span>
            </div>

            <div className="test-warning">
                 *Please Use the following test credit card for payment*
                 <br />
                 4242 4242 4242 4242 -Exp: 01/20 - CVV: 123
            </div>
            <StripeCheckoutButton price={cartTotal} />

        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);  