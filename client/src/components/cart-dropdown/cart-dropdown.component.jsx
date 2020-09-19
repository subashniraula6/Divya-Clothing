import React from 'react'
import './cart-dropdown.styles.scss'
import { CustomButton } from '../custom-button/custom-button.component'

import { connect } from 'react-redux';

import CartItem from '../cart-item/cart-item.component'

import { selectCartItems } from '../../redux/cart/cart-selectors'

import { withRouter } from 'react-router-dom'

import {toggleCartHidden} from '../../redux/cart/cart.actions'

function CartDropDown({ cartItems, dispatch, history }) { //Dispatch action Shorthand
    return (
        <div className="cart-dropdown">
            <div className="cart-items" >
                {
                    cartItems.length ? (
                        cartItems.map((item) => {
                            return <CartItem key={item.id} item={item} />
                        })
                    ) :
                        <span className="empty-message">Your cart is empty</span>
                }
            </div>
            <CustomButton onClick={() => {
                history.push("/checkout");
                dispatch(toggleCartHidden())
            }} > GO TO CHECKOUT </CustomButton>
        </div>
    )
}

const mapStateToprops = (state) => {
    return ({ cartItems: selectCartItems(state) })
}
/*
const mapDispatchToProps = dispatch => ({
    toggleHidden : () => dispatch(toggleCartHidden)
})
*/
export default withRouter(connect(mapStateToprops)(CartDropDown))