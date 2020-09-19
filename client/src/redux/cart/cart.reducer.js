import cartActionTypes from './cart.types'
import { addItemToCart, removeItem } from './cart.utils'

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}
const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.TOGGLE_CARD_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case cartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case cartActionTypes.CLEAR_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter((cartItem) => {
                    return cartItem.id !== action.payload.id
                })
            }
        case cartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems : removeItem(state.cartItems, action.payload)
            }
        case cartActionTypes.CLEAR_CART:
            return {
                ...state,
                cartItems : []
            }
        
        default:
            return state
    }
}
export default cartReducer; 