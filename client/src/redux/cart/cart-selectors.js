import { createSelector } from 'reselect'


const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems  
)

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) =>cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((accumulator, cartItem)=>(cartItem.quantity + accumulator), 0) 
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((accumulator, cartItem)=> (accumulator + cartItem.price * cartItem.quantity), 0)
)
/*
//Incase to find Taxed total
//Let 'taxPercent' attribute be added to cart reducer state i.e under cart object

export const selectTaxPercent = createSelector(
    [selectCart],
    (cart) => cart.taxPercent 
)

export const taxeddTotal = createSelector(
    [selectCartTotal],
    [selectTaxPercent],
    (cartTotal, taxPerxcent) => cartTotal * (taxPerxcent/100); 
)
*/